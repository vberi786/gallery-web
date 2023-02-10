  
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth";


var firebaseConfig = {
  apiKey: "AIzaSyAbR_e9QT0pBImUTtBCi9tSDb5kpJxWR1Y",
  authDomain: "todo-live-48e3f.firebaseapp.com",
  projectId: "todo-live-48e3f",
  storageBucket: "todo-live-48e3f.appspot.com",
  messagingSenderId: "243309537569",
  appId: "1:243309537569:web:badee2037ab09749cc7660",
  measurementId: "G-KT0408VPHG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const auth = firebase.auth();

export {projectStorage, projectFirestore, timestamp, auth};
