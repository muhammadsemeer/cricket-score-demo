import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtiAyS2MI8QROyBMTgRiVsWVTUUgW0Qc4",
  authDomain: "galaxieon-project001.firebaseapp.com",
  databaseURL: "https://galaxieon-project001.firebaseio.com",
  projectId: "galaxieon-project001",
  storageBucket: "galaxieon-project001.appspot.com",
  messagingSenderId: "467749679969",
  appId: "1:467749679969:web:222f29b5660675f9f58b20",
  measurementId: "G-BZXE2V4PBH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
