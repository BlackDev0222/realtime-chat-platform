import * as firebaseApp from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import * as firebaseStore from "firebase/firestore";
import * as firebaseStorage from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkJREmXYlOS4zsJ3cmKfyhNU51kkiem50",
  authDomain: "realtime-chat-platform.firebaseapp.com",
  projectId: "realtime-chat-platform",
  storageBucket: "realtime-chat-platform.appspot.com",
  messagingSenderId: "654175330296",
  appId: "1:654175330296:web:c82b31ace9b0a48fd9400d",
  measurementId: "G-RGCG8BBRS2",
};

const app = firebaseApp.initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);
const provider = new firebaseAuth.GoogleAuthProvider();
const db = firebaseStore.getFirestore(app);
const storage = firebaseStorage.getStorage(app);

export { db, auth, provider, storage };
