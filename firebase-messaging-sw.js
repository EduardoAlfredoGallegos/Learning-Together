// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBmArX8o1ObjMjXuovhSMEG97CjEwFLM9o",
  authDomain: "learningtogetherdeploy.firebaseapp.com",
  projectId: "learningtogetherdeploy",
  storageBucket: "learningtogetherdeploy.appspot.com",
  messagingSenderId: "880408318990",
  appId: "1:880408318990:web:0e9a84f8c88b953e7ad85f"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
