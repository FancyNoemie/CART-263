
// State of spiral
let x, y;
let px, py; //(Previous x and y)
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;

// Scale / resolution of spiral
let stepSize = 20;
let totalSteps;

// Data in .csv format
let circuits;
let cooking;
let craft;
let living;
let outside;
let workshop;
let points = [];

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

// Function to test what subcategory the project is in
function isPrime(value) {
  if (value == 1) return false;
  for (let i = 2; i <= sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

function draw(){
  // If prime draw circle
  if (isPrime(step)) {
    for(let i = 0; i< stepSize; i+= 20) {
    points[i].drawDatapoint(x,y,stepSize);
    }
  }

  // Connect current to previous with a line
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
    
  }

  drawDatapoint(x,y,stepSize){ //Method - a function that belongs to a class. 
    fill(255);
    stroke(255);
    circle(x, y, stepSize * 0.5);
  }
}
