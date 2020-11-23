import fireObject from "firebase/app";
import "firebase/firebase-firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase

fireObject.initializeApp(config);
const db = fireObject.firestore();

export const commentCollection = db.collection("comments");

export default fireObject;
