// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0R1pfl3syL0EnJ31LuXx3b3lcGOcBVUg',
  authDomain: 'sohay-auth.firebaseapp.com',
  projectId: 'sohay-auth',
  storageBucket: 'sohay-auth.firebasestorage.app',
  messagingSenderId: '602271353444',
  appId: '1:602271353444:web:5eb55b00d3fd34ac722d71',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);