// create the following variables
  // hero with a string value
  // gender with a string value
  // age with a number value
  // weapon with a string value
  // pronoun with an empty value

// Create a conditional that sets the pronoun variable depending on the gender

// Create a conditional that out puts "is just beginning" if age is less than 18. 
  // If their age is between 21 and 40 out put "has seen a few battles"
  // If their age is greater than 40 out put "has lived through many epic battles"
// Create the following sentece using your newly created variables: 
  // "[Jake] is our lovable hero, who [has seen a few battles] with his trusty [sword]."


var hero = "Snezzing girl";
var gender = "Female";
var age = 26;
var weapon = "runny nose";
var pronoun;
var xp;

if (gender ==="Female"){
	pronoun = "her";
} else if (gender === "Male"){
	pronoun = "his"
} else{
	pronoun = "their";
}

if (age <= 18){
	xp = "just beginning";
} else if (age >= 19 && age <= 40){
	xp = "has seen a few battles";
} else{
	xp = "has lived though epic battles"
}

console.log(hero + " is our loveable hero, who " + xp + " with her favorite trusty" + weapon + "!")


// 1 Fish 2 Fish
// create a variable named count with no value
// create a variable named animal and set the variable to any animal as a string
  // create a function name animalHouse that takes two parameters
    // set the count variable to equal the sum of the two parameters
    // console.log the count variable
// invoke animalHouse

var count;
var animal = "Pitbull";
function animalHouse(p1,p2){
	var count = p1+p2;{

count = p1 + p2;
console.log(count);
}
animaHouse(19, 44);

//1 Fish 2 Many Fish (cont.)
  // create a conditional that checks the count variable
    // check if the count is greater than 2 
      // console.log 'We have to many elephants' where the animal is the animal variable and an 's' added to the animal.
    // if the first condition is false console.log 'Welcome to the club'

if (count >= 10){
	console.log("We have too many " + animal + "s");
}  else {
	console.log("Welcome to the club");
}

//Assemble the Avengers
  // create a variable named hero and set the value to any avenger as a string

  // create a function named avengersAssemble that takes one parameter avenger
    // inside the function create a conditional to check the parameter.
    // console.log and concat the parameter with a different message based on which avenger assembles if the condition is true
    // create four conditions, one for ironman, captain america, black widow and a default to console.log('Sorry, you are not needed for this mission')

    // example: if the avenger is Hulk -- console.log(avenger + 'smash');

  // invoke avengersAssemble and pass the variable hero 

var hero = "Wonderwomen";
function avengerAssemble(avenger){
	
  if (avenger == "Wonderwomen"){
      console.log("I am " + avenger + " I like batman and superman when they fight.");
  } else (avenger = "Ironman"){
      console.log("Sorry, you are not needed for this mission");
  } else (avenger = "Captain America"){
      console.log("Sorry, you are not needed for this mission");
  } else (avenger = "blackwidow"){
      console.log("Sorry, you are not needed for this mission");
  }
}
avengersAssemble(Wonderwomen);

//Lights Out
  // create a variable named lights and set the value to a boolean 
  // create a conditional 
    // if the variable is true console.log('And then there was light')
    // else console.log('Lights out')

var lights = true;

if (light == true){
	console.log("And then there was light")
} else {
	console.log("lights out")
}

//Vroom Vroom
  // create a variable named carType and set the value to Toyota, Lamborghini, or Tesla as a string.
  // create a variable named color and set the value to red, blue, or black as a string
  // create a variable named num and set the value to an integer

  //create a conditional and check for the following: 
    // check for a blue Toyota
    // check for a red Lamborghini
    // check for a black Tesla 
  //console log "We have" and your variables. for each condition. 
    // if none of the conditions are true console log this sentence with your variables,"We don't have any blue Toyotas in stock"

var carType = ("Toyota", "Lamborghini", "Telsa");
var color = ("red", "blue", "black");
var num = 12;

if (carType == "Toyota" && color == "blue"){
  console.log("we have " + num + " " + color (1) + " " + carType (0)
  } else if (carType == "Lamborghini" && color == "blue"){
    	console.log("we have " + num + " " + color (0) + " " + carType (1)
  } else if (carType == "Tesla" && color == "black"){
    	console.log("we have " + num + " " + color (2) + " " + carType (2)
  } else {
    	console.log("We dont have any in stock")
}