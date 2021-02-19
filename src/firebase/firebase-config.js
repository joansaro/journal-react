import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCSl9Fvsb_Ejh7nG9s_MPiqt9bc8oSocLs",
    authDomain: "react-app-notas-61579.firebaseapp.com",
    projectId: "react-app-notas-61579",
    storageBucket: "react-app-notas-61579.appspot.com",
    messagingSenderId: "557626232057",
    appId: "1:557626232057:web:d9ecd9346a39db8ea62628"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export{
    db,
    googleAuthProvider,
    firebase
}