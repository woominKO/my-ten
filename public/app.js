import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js';

import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';
import {
  getFirestore,
  collection,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
const firebaseConfig = {
  apiKey: 'AIzaSyBGc2FFFpU9ZQlPyCz9gi577T453VBXZvM',
  authDomain: 'my-ten-d704e.firebaseapp.com',
  projectId: 'my-ten-d704e',
  storageBucket: 'my-ten-d704e.appspot.com',
  messagingSenderId: '92562742777',
  appId: '1:92562742777:web:c6194f15c3d13c1fffb128',
  measurementId: 'G-V295HMWBP5',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);
const auth = getAuth();
const login_button = document.querySelector('#login-button');

login_button.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
