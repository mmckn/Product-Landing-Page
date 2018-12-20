
var signUp = document.querySelector(".signUp");
var signUpForm = document.querySelector(".signUpForm")
var logInForm=document.querySelector(".logInForm");
var log = document.querySelector(".log");




function enlargeElement(x){
	

var enlarge = document.querySelectorAll(x);

enlarge.forEach(function(item){item.addEventListener("mouseenter", function(){
	
	item.className +=" enlarge";})});
enlarge.forEach(function(item){item.addEventListener("mouseleave", function(){
	
	item.classList.remove("enlarge");})});

};
enlargeElement("a");

var submitButton = document.querySelector(".submit");


submitButton.addEventListener("click", function collectUserData()
{
	var email = document.querySelector (".email").value;
	console.log(email);
	var username =document.querySelector(".username").value;
	console.log(username);
	var password = document.querySelector(".password").value;
	console.log(password);
	const user1 = new Newuser(email, username, password);
	console.log(user1);
	userDetails.push(user1);
	signUpForm.style.display ="none";
});

	class Newuser  {
		constructor(email, username, password){
		this.email = email;
		this.username = username;
		this.password =password;

	}
}
userDetails = [];
var newarray=[];

var logins = document.querySelector(".loginButton");

logins.addEventListener("click", function compareLogInDetails(){
	var userLogin = document.querySelector(".userlogin").value;
	var userPassword = document.querySelector(".userpass").value;

		var logged = userDetails.forEach(function(item){
		


				if (item["username"] == userLogin && item["password"] == userPassword){

			console.log("logged in");
				newarray.push(item);
				console.log(newarray);


					console.log("logged in");
					window.open("Userpage.html",  "currentWindow", "");
					
					;}
					else console.log("invalid username or password.");

				
			})});


function hideElement(x,y){
x.style.display ="none";

y.addEventListener("click", function(){
	
	x.style.display = "";



})};
 hideElement(signUpForm,signUp);
 hideElement(logInForm,log);


var userColor= document.querySelectorAll(".login");

 var changeColor = function(){
	if( document.documentElement.scrollTop >=760){
		
		userColor.forEach(function(item){
			item.classList.add("colorChange")
		})}
		else {userColor.forEach(function(item){
			item.classList.remove("colorChange")})}
	};

	
	window.addEventListener("scroll", changeColor);