import { initializeApp } from "firebase/app";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

export const firebaseApp = initializeApp(config);

console.log("apikey", process.env.REACT_APP_FIREBASE_API_KEY);
console.log("도메인", process.env.REACT_APP_FIREBASE_DOMAIN);
console.log("프로젝트id", process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log("db", process.env.REACT_APP_FIREBASE_DB_URL);
