import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDTdOvvs-QNs84ZK8n8kQFKjiz-R_7FGSU",
  authDomain: "lmuhacks.firebaseapp.com",
  databaseURL: "https://lmuhacks.firebaseio.com",
  projectId: "lmuhacks",
  storageBucket: "lmuhacks.appspot.com",
  messagingSenderId: "148770675715",
  appId: "1:148770675715:web:1459244c79c7d1832b0236",
  measurementId: "G-S3VD8043KN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;