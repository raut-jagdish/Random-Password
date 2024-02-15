const passwordbox = document.getElementById("password");
const length=12;

const UpperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"; 
let specialCharacters = "!@#$%^&*()_+=-`;:,./?{}|[]\"~<> ";  
let numbers = "0123456789";      

function showPassword(){       
	var x = document.getElementById("show_hide").checked;            
	if(x){                                
		passwordbox.type = "text";                          
	}else{                                                            
		passwordbox.type = "password";                                              
	}      
}   
