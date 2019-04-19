-- ========================================================
--              USERS: NAME, USERNAME, STREETADDRESS, CURRENTSTATE, ZIPCODE, PWHASH
-- ========================================================
-- create table name(
--     id serial primary key, 
--     name text, 
--     name varchar(200) unique not null, 
    
-- );


create table users(
    id serial primary key, 
    name text, 
    address text,
    username varchar(200) unique not null, 
    streetaddress text,
    city text,
    currentstate text,
    zipcode text,
    pwhash varchar(60) not null
   

);

