 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCpp7QCDlNQeEjqn009Iracxcpwd5YyYMQ",
    authDomain: "fir-javascript-84d20.firebaseapp.com",
    databaseURL: "https://fir-javascript-84d20-default-rtdb.firebaseio.com",
    projectId: "fir-javascript-84d20",
    storageBucket: "fir-javascript-84d20.appspot.com",
    messagingSenderId: "904882836187",
    appId: "1:904882836187:web:24ad5344919769ea54f2fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



var c = console.log;
var fuserid ;
let signup =document.getElementById("signup");


signup.onclick = function(){
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

    const promise = firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
        fuserid = firebase.auth().currentUser.uid;
             console.log(fuserid);
             
             info();
             alert("Account Created");
    }).catch(function(){
        alert("gh")

    });
};
