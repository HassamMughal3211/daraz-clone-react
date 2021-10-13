import firebase from 'firebase/compat/app';
//import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCKa2bRng-ftUI53WqjrLZOE5mH6xIC-Q8",
    authDomain: "daraz-clone-react.firebaseapp.com",
    projectId: "daraz-clone-react",
    storageBucket: "daraz-clone-react.appspot.com",
    messagingSenderId: "115326156516",
    appId: "1:115326156516:web:43a03ee1a411805c2a76f1",
    measurementId: "G-GXNE7FR6XR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebase);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
// export var provider = new firebase.auth.GoogleAuthProvider();
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();

export default firebase;