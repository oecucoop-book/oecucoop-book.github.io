importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');


firebase.initializeApp({
    apiKey: "AIzaSyDl7dK6vJFCSe4eevk-iHsBSVzl0NHWh44",
    authDomain: "oecu-coop-book-notify.firebaseapp.com",
    projectId: "oecu-coop-book-notify",
    storageBucket: "oecu-coop-book-notify.firebasestorage.app",
    messagingSenderId: "268169649991",
    appId: "1:268169649991:web:5c4aa64bb2c5abbbc9f662"
});

const messaging = firebase.messaging();
