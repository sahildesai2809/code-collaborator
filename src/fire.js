import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqaXsOmj2yE_RDzEMbbhes3B7fsvtz-MY",
  authDomain: "codecollab-cb118.firebaseapp.com",
  databaseURL: "https://codecollab-cb118-default-rtdb.firebaseio.com",
  projectId: "codecollab-cb118",
  storageBucket: "codecollab-cb118.appspot.com",
  messagingSenderId: "677230428874",
  appId: "1:677230428874:web:b420e08510cc72b0f02a33",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
