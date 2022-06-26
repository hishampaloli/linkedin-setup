import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCsMoJjedW5Rgk-C8la5wJe7Zf-cM37bo",
    authDomain: "dummylcone.firebaseapp.com",
    projectId: "dummylcone",
    storageBucket: "dummylcone.appspot.com",
    messagingSenderId: "879954065831",
    appId: "1:879954065831:web:3693274d58d7bbf9731e82",
    measurementId: "G-JV18T10VH4"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export {auth, provider, storage };

  export default db;