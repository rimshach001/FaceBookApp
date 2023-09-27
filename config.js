import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig={
    apiKey: "AIzaSyBYTVFfqNEZy-RlTBd5zsWamzxXtQMT-xo",
    authDomain: "facebooktest-80ea7.firebaseapp.com",
    projectId: "facebooktest-80ea7",
    storageBucket: "facebooktest-80ea7.appspot.com",
    messagingSenderId: "4126657483",
    appId: "1:4126657483:web:d7a49df1158725f02b444e",
    measurementId: "G-KQDPB4BVL3"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
    console.log(firebase,"---");
}
export {firebase}