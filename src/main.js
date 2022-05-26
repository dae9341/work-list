/* eslint-disable */
import { initializeApp } from 'firebase/app';
import { getAuth, getRedirectResult, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import Vue from 'vue';
import App from './App.vue';
import '@/assets/scss/common.scss'

const firebaseConfig = {
  apiKey: "AIzaSyDcsIRnfoshTi0ekIlRcCwLCRbLijalgas",
  authDomain: "todolist-e8b0d.firebaseapp.com",
  databaseURL: "https://todolist-e8b0d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-e8b0d",
  storageBucket: "todolist-e8b0d.appspot.com",
  messagingSenderId: "610067574429",
  appId: "1:610067574429:web:646102d20c1d54c3f76e74",
  measurementId: "G-C995XJXW05"
};

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const app = initializeApp(firebaseConfig);
const auth = getAuth();

function login(){

  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
  
    // The signed-in user info.
    const user = result.user;
  
    console.log(credential,token,user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  
    console.log(error)
  });
}

// onAuthStateChanged(auth,(user)=>{
//   if(user){
//     const uid = user.uid;
//     console.log(uid);
//   }else{
//     console.log('user is signed out')
//   }
// })

  

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
