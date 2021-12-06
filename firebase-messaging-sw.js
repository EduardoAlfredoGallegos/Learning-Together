import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyARb3fUE70QrjRYvHyCoqw-mSYKQ1AzgOk",
  authDomain: "learningtogether-faae4.firebaseapp.com",
  projectId: "learningtogether-faae4",
  storageBucket: "learningtogether-faae4.appspot.com",
  messagingSenderId: "56880993418",
  appId: "1:56880993418:web:1781c04d5e16b4baa88973",
  measurementId: "G-XM85CRG2EV",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
