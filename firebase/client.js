import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzUwQV1KUeZYJjwHmM3Zrx3-i1ay_mrj8",
  authDomain: "devter-334f2.firebaseapp.com",
  projectId: "devter-334f2",
  storageBucket: "devter-334f2.appspot.com",
  messagingSenderId: "741127756030",
  appId: "1:741127756030:web:55623d391fc64f8573adaf",
  measurementId: "G-8EYE0796P6",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { email, photoURL, displayName } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
