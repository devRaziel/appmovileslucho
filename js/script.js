let navbar = document.querySelector('.navbar');


// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq9JtJS8_AAeMYP1PRbY9S--xS8W4tixI",
    authDomain: "johana-a03f9.firebaseapp.com",
    projectId: "johana-a03f9",
    storageBucket: "johana-a03f9.appspot.com",
    messagingSenderId: "994438034104",
    appId: "1:994438034104:web:3b0c921370144a9e3eba4d"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.Firestore();

const SaverUser = (user) =>{
    db.collection("usuarios").add({
        user,
    })




}


document.getElementById('btnsave').addEventListener('click', function() {
    alert('Hola');
 let cedula = "kjkjjj"
 let cedula1 = "kjkjjj"
 let cedula2 = "kjkjjj"
    const user = {
        cedula,
        cedula1,
        cedula2
    }
    SaverUser(user);
});

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDq9JtJS8_AAeMYP1PRbY9S--xS8W4tixI",
//     authDomain: "johana-a03f9.firebaseapp.com",
//     projectId: "johana-a03f9",
//     storageBucket: "johana-a03f9.appspot.com",
//     messagingSenderId: "994438034104",
//     appId: "1:994438034104:web:3b0c921370144a9e3eba4d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
