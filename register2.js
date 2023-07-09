import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
      import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        //Update the below URL with the appropriate version if necessary.
      } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

      const firebaseConfig = {
        apiKey: "AIzaSyAwYNBEaSUhEav_HsQmVHCk8uRfXz7cEUU",
        authDomain: "ass3-8768f.firebaseapp.com",
        databaseURL: "https://ass3-8768f-default-rtdb.firebaseio.com",
        projectId: "ass3-8768f",
        storageBucket: "ass3-8768f.appspot.com",
        messagingSenderId: "715298826234",
        appId: "1:715298826234:web:4c41da70d3a08c2962e643",
        measurementId: "G-0T3FD6ZGXL",
      };

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      const userEmail = document.querySelector("#userEmail");
      const userPassword = document.querySelector("#userPassword");
      const authForm = document.querySelector("#authForm");
      const secretContent = document.querySelector("#secretContent");
      const signUpButton = document.querySelector("#signUpButton");
      const signInButton = document.querySelector("#signInButton");
      const signOutButton = document.querySelector("#signOutButton");

     

      const userSignUp = async () => {
        const signUpEmail = userEmail.value;
        const signUpPassword = userPassword.value;
        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("Your account has been created!");
            window.location.href = "home.html";
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
          });
      };

      const userSignIn = async () => {
        console.log('hello')
        const signInEmail = userEmail.value;
        const signInPassword = userPassword.value;
        signInWithEmailAndPassword(auth, signInEmail, signInPassword)
          .then((userCredential) => {
            const user = userCredential.user;

            window.location.href = "home.html";
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
          });
      };

      const checkAuthState = async () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            authForm.style.display = "none";
            secretContent.style.display = "block";
          } else {
            authForm.style.display = "block";
            secretContent.style.display = "none";
          }
        });
      };

      const userSignOut = async () => {
        await signOut(auth);
      };

      //checkAuthState();

        //signUpButton.addEventListener('click', userSignUp);
      signInButton.addEventListener("click", userSignIn);
      

      export { userSignIn, userSignUp, checkAuthState, userSignOut };
