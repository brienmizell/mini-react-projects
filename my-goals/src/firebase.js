import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD__MiO_M_x32yFoC-af-Y327AK3HWnkS4",
  authDomain: "my-goals-98408.firebaseapp.com",
  databaseURL: "https://my-goals-98408.firebaseio.com",
  projectId: "my-goals-98408",
  storageBucket: "my-goals-98408.appspot.com",
  messagingSenderId: "96317750952"
};

export const firebaseApp = firebase.initializeApp(config);
