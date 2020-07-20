import firebase from "firebase";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDQaKzmi7GnvAb6qqRSboUCawCrkh91JVc",
  authDomain: "krishnuidev.firebaseapp.com",
  databaseURL: "https://krishnuidev.firebaseio.com",
  projectId: "krishnuidev",
  storageBucket: "krishnuidev.appspot.com",
  messagingSenderId: "148408666904",
  appId: "1:148408666904:web:a038642f9136b3ad56ac6d",
  measurementId: "G-WSH44WXLZ3",
};

const Firebase = firebase.initializeApp(config);
//const firebaseConnection = Rebase.createClass(app.database());
const storage = firebase.storage();

export { Firebase, storage as default };
