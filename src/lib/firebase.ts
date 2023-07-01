// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAqMSQLadX8BerJOq3cwWalSUGRR_iFhIU',
	authDomain: 'make-your-profile.firebaseapp.com',
	projectId: 'make-your-profile',
	storageBucket: 'make-your-profile.appspot.com',
	messagingSenderId: '512191226808',
	appId: '1:512191226808:web:357a1a2c9e2afa132b654d',
	measurementId: 'G-CKEPCHV69R'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
