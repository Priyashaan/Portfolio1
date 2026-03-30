var message=prompt("Enter Your Name");
var firstuppercase = message.slice(0,1);
uppercase=firstuppercase.toLocaleUpperCase();
var restofname=message.slice(1,message.length);
lowercase=restofname.toLocaleLowerCase() ;
var captlized = uppercase + lowercase;
alert(  "Hello ,"  +   captlized  +  "  Thank you for considering my Resume."); 
