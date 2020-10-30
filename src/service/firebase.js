import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDxP2zbKRZVAeKLiwji_S7K8KUUgQ3NSOY",
    authDomain: "react-project-vehicles.firebaseapp.com",
    databaseURL: "https://react-project-vehicles.firebaseio.com",
    projectId: "react-project-vehicles",
    storageBucket: "react-project-vehicles.appspot.com",
    messagingSenderId: "716546628154",
    appId: "1:716546628154:web:32bc62c890b05825093303",
    measurementId: "G-9TH0P5RYGX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export default firebase
