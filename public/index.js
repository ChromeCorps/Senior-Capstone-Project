var index ={};

(function(){
	var firebase = app_fireBase;
var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
		  // User is signed in.
		  uid = user.uid;
        }else{
			// Redirect to login page
			uid = null;
			window.location.replace("login.html");
		}
	  });
	
	function logOut() {
		firebase.auth().sigOut();
	}

	index.logOut = logOut;
})()

$(document).ready(function() {
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
	});
});