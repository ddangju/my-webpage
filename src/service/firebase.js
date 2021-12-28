import { initializeApp } from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

// Initialize Firebase
// export const firebaseApp = initializeApp(config);

///const firebaseApp = initializeApp(config);
/// export default firebaseApp;
const firebaseApp = initializeApp(config);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
