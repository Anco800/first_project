const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCzz3NgBl9Iv_DWaTwStB74qhI-MwmnSFc",
  authDomain: "firstproject-3f5a3.firebaseapp.com",
  projectId: "firstproject-3f5a3",
  storageBucket: "firstproject-3f5a3.appspot.com",
  messagingSenderId: "832898376291",
  appId: "1:832898376291:web:0c710de5a2f9619e2b0e56",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function userAuth({ email, name, age, password, height }) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (credentials) {
      const user = credentials.user;

      db.collection("users").doc(user.email).set({
        userEmailAddress: email,
        userAge: age,
        userName: name,
        height,
      });

      return credentials.user;
    })
    .catch(function (error) {
      return error;
    });
}

module.exports = { userAuth };
