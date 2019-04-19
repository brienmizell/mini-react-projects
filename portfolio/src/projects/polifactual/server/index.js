require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const db = require('./models/db');
// const formidable = require('formidable');
// const fs = require('fs');
// const uuidv4 = require('uuid/v4');

const User = require('./models/User');
// const bcrypt = require('bcrypt');

app.use(session({
    store: new pgSession({
        pgPromise: db
    }),
    // UNIQUE PER APPLICATION/USER LOGIN
    secret: 'abc123kasfsdbukbfrkqwuehnfioaebgfskdfhgcniw3y4fto7scdghlusdhbv',
    saveUninitialized: false,
    cookie: { 
        maxAge: 30 * 24 * 60 * 60 * 1000 
    } 
}));

app.use(express.static('public'));

// ================================================================================================
//                  Configure body-parser to read data sent to HTML form tags
// ================================================================================================
app.use(bodyParser.urlencoded({extended: false}));

// ================================================================================================
//                          Configure body-parser to read JSON bodies 
// ================================================================================================
app.use(bodyParser.json());

// ================================================================================================
//                  
// ================================================================================================
function protectRoute(req, res, next) {
    let isLoggedIn = req.session.user;
    if (isLoggedIn) {
        next();
    } else {
        res.redirect('/api/login');
    }
}

// ================================================================================================
//                  
// ================================================================================================
app.use((req, res, next) => {
    let isLoggedIn = req.session.user ? true : false;
    console.log(req.session.user);
    console.log(`On ${req.path}, is a user logged in? ${isLoggedIn}`);
    next();
});

// ================================================================================================
//                                      USER REGISTRATION
// ================================================================================================

app.post('/api/register', (req, res) => {
    // Process the signup form
    // 1. Grab the values out of req.body
    const newName = req.body.name;
    const newUsername = req.body.username;
    const newPassword = req.body.password;
    const newStreetAddress = req.body.streetaddress;
    const newCity = req.body.city;
    const newState = req.body.currentstate;
    const newZipcode = req.body.zipcode;
    
    // 2. Call User.add
    User.add(newName, newUsername, newStreetAddress, newCity, newState, newZipcode, newPassword)
        .catch((err) => {
            console.log(err);
            console.log('that was the error');
            res.json({ status: "NOT GOOD" });
        })
        .then(newUser => {
            req.session.user = newUser;
            console.log('--------THIS IS THE NEW USER---------');
            console.log(newUser);
            res.json({ 
                status: "Good" ,
                user: newUser
            });
        });
});

// ================================================================================================
//                                              USER LOGIN
// ================================================================================================

app.post('/api/login', (req, res) => {
    // Process the login form 
    // 1. Grab values from form 
    const theUsername = req.body.username;
    const thePassword = req.body.password;
    // 2. Find a user whose name
    // matches `theUsername`
    User.getByUsername(theUsername)
        .catch(err => {
            console.log(err);
            // res.redirect('/api/login');
        })
        .then(theUser => {
            // const didMatch = bcrypt.compareSync(thePassword, theUser.pwhash);
            if (theUser.passwordDoesMatch(thePassword)) {
                req.session.user = theUser;
                console.log('--------THIS IS THE USER--------')
                console.log(theUser);
                req.session.save( () =>{
                    res.json({ 
                        status: "Good",
                        user: theUser
                    });
                })
            } else {
                console.log("something went wrong");
                res.json({ 
                    status: "NOT GOOD",
                });
            }
        })
});

// ================================================================================================
//                                              USER LOGOUT
// ================================================================================================
app.get("/api/verify", (req, res) => {
    res.json({
        user: req.session.user
    });
});

app.post('/api/logout', (req, res) => {
    // End session and redirect them to the home page
    req.session.destroy(() => {
        req.session = null;
        res.json({ status: "Goodbye"});
    });

});


// ================================================================================================
//                          ALLOWS VIEWING ON LOCAL HOST 3005
// ================================================================================================
app.listen(3005, () => {
    console.log('You express app is ready!');
});