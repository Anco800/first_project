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
const db1 = firebase.firestore();

function userAuth({ email,
 firstName,
 lastName,
 age,
 password,
 height,
 teamName
 }) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (credentials) {
      const user = credentials.user;
      const user_id = credentials.user.uid;
      db1.collection("teams").doc(user.email).set({
        teamName,
        createdByUserId: user_id,
      });
      db.collection("users").doc(user.uid).set({
        email,
        age,
        firstName,
        lastName,
        height,
        userId: user_id,
      });

      return credentials.user;
    })
    .catch(function (error) {
      return error;
    });
}

module.exports = { userAuth };
