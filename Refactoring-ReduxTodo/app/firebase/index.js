import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAIzZ4nMsLxMuBliR8ycxb6E-oQ_ueiwTs",
    authDomain: "react-redux-todoapp-5ff04.firebaseapp.com",
    databaseURL: "https://react-redux-todoapp-5ff04.firebaseio.com",
    projectId: "react-redux-todoapp-5ff04",
    storageBucket: "react-redux-todoapp-5ff04.appspot.com",
    messagingSenderId: "965513622053"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
