import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAH9SzlK4p6dd5UuiHt5-jFl30zO1z8sTE",
  authDomain: "react-native-firebase-84057.firebaseapp.com",
  projectId: "react-native-firebase-84057",
  storageBucket: "react-native-firebase-84057.appspot.com",
  messagingSenderId: "899969521268",
  appId: "1:899969521268:web:1b9cee4273dd341dca6321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

