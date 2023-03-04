//Create a unique color for each!




// State of spiral
let x, y;
let px, py; //(Previous x and y)
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;

// Scale / resolution of spiral
let stepSize = 5;
let totalSteps;

// Data in .csv format
let circuits;
let cooking;
let craft;
let living;
let outside;
let workshop;
let points = [];
let size;

function preload() {
  circuits = loadTable("assets/projects_circuits.csv", "csv", "header");
  cooking = loadTable("assets/projects_cooking.csv", "csv", "header");
  craft = loadTable("assets/projects_craft.csv", "csv", "header");
  living = loadTable("assets/projects_living.csv", "csv", "header");
  outside = loadTable("assets/projects_outside.csv", "csv", "header");
  workshop = loadTable("assets/projects_workshop.csv", "csv", "header");
}

///////////////////////////////////SPIRAL/////////////////////////////////////////


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(1,30,30);

  // set up spiral
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;

  // Create particles (one for each step)
  for(let i = 0; i < stepSize; i++){
    points[i] = new Particle();
  }
}

sub = [];
// Function to test what subcategory the project is in
function checkSubcategory(value) {
  //(∩^o^)⊃━☆array
    //check the string dans subcategory
    //compare to see if it's already in the array?? https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
    //https://www.w3schools.com/jsref/jsref_includes_array.asp
    //put the string in the array if not there
  
    //sub.includes(circuits.getString(r, 3));
    if (sub.includes(circuits.getString(value, 3)) == false){
      sub.push(circuits.getString(value, 3));
  
    console.log (sub);
  }
  else{ //tell me where the fuck it is in the array (because there is no function to do that)
    for(let i = 0; i < sub.length; i++){
      if (sub[i]==circuits.getString(value, 3)){
        return (i);
      }
    }
  }
}



function draw(){
  // If prime draw circle
  
  var return_value = checkSubcategory(step);
    let size = circuits.getString(step, 4);
    print (size);
    for(let i = 0; i< stepSize; i++) {
      points[i].drawDatapoint(x,y,stepSize,size,return_value,);
  }
  //console.log (sub);

 
  // Connect current to previous with a line
  //stroke(255);
  line(x, y, px, py);
  px = x;
  py = y;

  // Move according to state
  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
  }
  
  // Change state
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;

  // Are we done?
  if (step > totalSteps) {
    noLoop();
  }
}

/////////////////////////////////PARTICLES////////////////////////////////////////////////

class Particle { //Class - The part of code that holds all the information to make an object, like a blue print. 
  constructor() { //Constructor - A piece of code that runs when you make an instance, like Setup. 
  //Every class needs a constructor. Its a good place to put all your variables. 
  this.c = color(random(83,95), random(19,32), random(68,80));

  }

  
  drawDatapoint(x,y,stepSize,size,return_value){ //Method - a function that belongs to a class. 
    fill(return_value * 10);
    noStroke();
    circle(x, y,(map(size,0,1000,stepSize,(stepSize*5))));
  }

}
