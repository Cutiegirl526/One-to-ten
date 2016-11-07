// Variables of the first part
var hero = "Awkawrd guy";
var gender = "Female";
var age = 26;
var weapon = "runny nose";
var pronoun;
var xp;

// conditional to set pronoun

// if gender ==female -> pronoun = "her"

if (gender ==="Female"){
	pronoun = "her";
} else if (gender === "Male"){
	pronoun = "his"
} else{
	pronoun = "their";
}

//conditionals 

if (age <= 18){
	xp = "just beginning";
} else if (age >= 19 && age <= 40){
	xp = "has seen a few battles";
} else{
	xp = "has lived though epic battles"
}

// function for the age and sentence

console.log(hero + " is our loveable hero, who " + xp + " with her favorite " + weapon + "!")

// fishies

