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

//Design Pattern: Singlton
firebase.initializeApp(firebaseConfig);

// DRY = Dont repeat yourself

const db = firebase.firestore();

/*

userAuth(user){

  const email = user.email
  const password = user.password

  // OR

  const {email, password} = user
}

*/

const auth = firebase.auth();

function registerUser(email, password, metaData) {
  try {
    const userCred = auth.createUserWithEmailAndPassword(email, password);
    db.collection("users").doc("userInfo").set(metaData);
    return userCred.user;
  } catch (error) {
    console.log(error);
  }
}

async function signUserIn(email, password) {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);

    const currentUser = {
      email: user.email,
      uid: user.uid,
    };

    // db.collection("users").add(currentUser);
    await getDoc(currentUser.uid);

    return currentUser;
  } catch (error) {
    console.log(error);
  }
}

async function getDoc(uid) {
  try {
    const doc = await db.collection("teams").doc(uid).get();
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
}



module.exports = { registerUser, signUserIn, firebase };
