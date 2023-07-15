// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import env variables
//  for vercel deployments refer to:
//  https://dev.to/manitej/the-ultimate-guide-to-using-environment-variables-with-create-react-app-2oo9

const { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSENGING_SENDER_ID, APP_ID, MEASUREMENT_ID } = process.env

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSENGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase exports for API
export const auth = getAuth(app);
export const db = getFirestore(app);