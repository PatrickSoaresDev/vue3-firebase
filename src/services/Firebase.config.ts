// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDYsY35o5SCCuvoGOZCTy_BvnR8ypBdtLY',
  authDomain: 'study-calendar-9b998.firebaseapp.com',
  projectId: 'study-calendar-9b998',
  storageBucket: 'study-calendar-9b998.appspot.com',
  messagingSenderId: '866364900606',
  appId: '1:866364900606:web:8ea27817379f35b0f951af',
  measurementId: 'G-XQ1JHWV5XD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
