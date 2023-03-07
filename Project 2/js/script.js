
// State of spiral
let x, y;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;

// Scale / resolution of spiral
let stepSize = 5;//<-------CHANGE THE RESOLUTION HERE!
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

// Loading .csv files
function preload() {
  circuits = loadTable("assets/projects_circuits.csv", "csv", "header");//<-------CHANGE THE DATASET HERE!
  //cooking = loadTable("assets/projects_cooking.csv", "csv", "header");
  //craft = loadTable("assets/projects_craft.csv", "csv", "header");
  //living = loadTable("assets/projects_living.csv", "csv", "header");
  //outside = loadTable("assets/projects_outside.csv", "csv", "header");
  //workshop = loadTable("assets/projects_workshop.csv", "csv", "header");
}

/////////////////////////////////////////////SPIRAL////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(1,30,30);

  // Set up spiral
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

// Function to test what subcategory the project is in, and creates an array with all the values
sub = [];
subColor = [];
let c;
function checkSubcategory(value) {
  if (sub.includes(circuits.getString(value, 3)) == false){          // Check if the value is in the (sub) array, if not;
    sub.push(circuits.getString(value, 3));                          // Add it to the sub array
    c = color(color(random(83,255), random(19,255), random(68,100)));// Create a color
    subColor.push(c);                                                // Save the color for later
  }
  else{                                                              // Basically giving me numbers instead of text, so I can use it later
    for(let i = 0; i < sub.length; i++){                             // Go trough all the values in the (sub) array
      if (sub[i]==circuits.getString(value, 3)){                     // If it is in the array already
        fill(subColor[i]);                                           // Set the corresponding color right before we use it to make the dataPoint
        return (i);                                                  // Because of the for loop, i corresponds to the number of the element in the array       
      }
    }
  }
}

function draw(){
  
  var return_value = checkSubcategory(step);                          // Take the "return" number
  let size = circuits.getString(step, 4);                             // Number of likes on a project 
  for(let i = 0; i< stepSize; i++) {
    points[i].drawDatapoint(x,y,stepSize,size,return_value);          // Draw a particle in the spiral
  }

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
  
  // Change state (turn)
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;

  // Are we done? (or else it will go on forever!)
  if (step > totalSteps) {
    noLoop();
  }
}

/////////////////////////////////////////////////PARTICLES//////////////////////////////////////////////////

class Particle { //Class - The part of code that holds all the information to make an object, like a blue print. 
  constructor() { //Constructor - A piece of code that runs when you make an instance, like Setup. 
  //Every class needs a constructor. Its a good place to put all your variables. 
  }
  drawDatapoint(x,y,stepSize,size,return_value){ //Method - a function that belongs to a class. 
    noStroke();
    circle(x, y,(map(size,0,1000,stepSize,(stepSize*5))));
  }

}
