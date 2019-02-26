(function() {
    
    //TODO: Add the initialization snippet


firebase.initializeApp(config);

//Login with Google
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });

//Login with Phone Number


//Login with Email and Password
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//Login
btnLogin.addEventListener('click', e => { 
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass)
    promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener('click', e => {
    const email = txtEmail.Value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass)
    promise.catch(e => console.log(e.message));
});

//Logout
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});

//Make Logout button (In)Visible
firebase.auth().onAuthStateChanged(firebaseUser =>  {
    if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    } else {
        console.log('not logged in');
        btnLogin.classList.add('hide');
    }
})

}());