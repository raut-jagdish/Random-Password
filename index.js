const passwordbox = document.getElementById("password");
const length=12;

const UpperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"; 
let specialCharacters = "!@#$%^&*()_+=-`;:,./?{}|[]\"~<> ";  
let numbers = "0123456789";      

const allchars = UpperCaseLetters+lowerCaseLetters+numbers+specialCharacters;

function createpassword(){
	let password ="";
	password+= UpperCaseLetters[Math.floor(Math.random()*UpperCaseLetters.length)];
	password+= lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
	password+= numbers[Math.floor(Math.random()*numbers.length)];
	password+= specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

	while(length>password.length){
		password+=allchars[Math.floor(Math.random()*allchars.length)];
	}
	passwordbox.value=password;
}
