
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAwYNBEaSUhEav_HsQmVHCk8uRfXz7cEUU",
    authDomain: "ass3-8768f.firebaseapp.com",
    projectId: "ass3-8768f",
    storageBucket: "ass3-8768f.appspot.com",
    messagingSenderId: "715298826234",
    appId: "1:715298826234:web:4c41da70d3a08c2962e643",
    measurementId: "G-0T3FD6ZGXL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();



signup.addEventListner('click',(e)=>{

    var email = document.getElementById('email');
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("successful")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('error message')
    // ..
  });
})

/* let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

window.signup = function(e) {
  e.preventDefault();
  console.log('hello');

  let obj = {
    username: username.value,
    email: email.value,
    password: password.value
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
      alert("Signup Successfully");
    })
    .catch(function(err) {
      alert("Error: " + err);
    });

  console.log(obj);
};
 */



