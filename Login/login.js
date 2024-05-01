
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
//import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBpdasWe3AHkyorY27LSNvVeBPgL7C8q8",
  authDomain: "sangeet-sagar-1db37.firebaseapp.com",
  projectId: "sangeet-sagar-1db37",
  storageBucket: "sangeet-sagar-1db37.appspot.com",
  messagingSenderId: "507297685238",
  appId: "1:507297685238:web:aceb5f78e28664ae0bd6d7",
  measurementId: "G-3J7LB082ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    //inputs

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Logged in Successfully")
            window.location.href = "../Spotify_Clone-master/index.html";
            //for redirecting to a page when clicked on ok after alert
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Enter Valid Credentials..")
            // ..
        });
})

//forgot password
const plink = document.getElementById('password-link');
plink.addEventListener("click", function (event) {
    event.preventDefault()
    //inputs
    const email = document.getElementById('email').value;
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Reset Password link sent to registered email ID")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Enter valid Credentials")
            // ..
        });
})

// //database
// const db = getDatabase(app);
// const submit = document.getElementById('submit');
// submit.addEventListener("click", function (event) {
//     event.preventDefault()
//     set(ref(db, 'userlogin/' +document.getElementById('email').value),{
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value,
//     })

// })