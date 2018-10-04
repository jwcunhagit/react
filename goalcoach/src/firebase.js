import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAjFuscxw5vPuk3xLfIHk7b4BO2dANRXhI",
  authDomain: "goalcoach-bde4b.firebaseapp.com",
  databaseURL: "https://goalcoach-bde4b.firebaseio.com",
  storageBucket: "goalcoach-bde4b.appspot.com",
  messagingSenderId: "313224418613"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoal');
