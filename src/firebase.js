import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjuNL-T3Rxl-3Iwg4wUVGvKbXaqBFVH3g",
  authDomain: "slack-clone-00001.firebaseapp.com",
  projectId: "slack-clone-00001",
  storageBucket: "slack-clone-00001.appspot.com",
  messagingSenderId: "366382074718",
  appId: "1:366382074718:web:378e831432aa5e41111dcf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//access db from multiplaces
const db = firebaseApp.firestore();

//preparing the authentication module
const auth = firebase.auth();
//preparing the provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, provider };

export default db;
