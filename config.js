import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUeZiqFvDvhltHy7QxUG1Jpah2DgR_8ow",
  authDomain: "project67-f05ee.firebaseapp.com",
  databaseURL: "https://project67-f05ee-default-rtdb.firebaseio.com",
  projectId: "project67-f05ee",
  storageBucket: "project67-f05ee.appspot.com",
  messagingSenderId: "823444040854",
  appId: "1:823444040854:web:a5f9f2bcba369c0e4c26b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
