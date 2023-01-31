/**

Noémie Carrier


*/
let ball = []; // declare an array
function setup() {
    createCanvas(400, 400);
    noStroke();
    for(let i = 0; i < 50; i++){
    ball[i] = new Particle();
    }
}
function draw() {
    background(33, 50, 56);
    for(let i = 0; i< ball.length; i++) {
        ball[i].moveAndDisplay();
    }
}
class Particle { //Class - The part of code that holds all the information to make an object, like a blue print. 
    constructor() { //Constructor - A piece of code that runs when you make an instance, like Setup. 
    //Every class needs a constructor. Its a good place to put all your variables. 
        this.x = width/2;
        this.y = height/2;
        this.speed = 2;
    }
    moveAndDisplay(){ //Method - a function that belongs to a class. 
        this.speed =  map(mouseX, 0, width, 7, 2); //left=fast
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        ellipse(this.x, this.y, 10);
        fill(this.x,this.y,255);
    }
}


////////////////////////////Simple Example/////////////////////////////
/**
let ball = []; // declare an array

function setup() {
    createCanvas(400, 400);
    for(let i = 0; i < 50; i++){
    ball[i] = new Particle();
    }
}
function draw() {
    background(200, 50, 100);
    for(let i = 0; i< ball.length; i++) {
        ball[i].move();
        ball[i].display(); 
    }
    
}
class Particle {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.speed = 2;
    }
    move(){
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
    display() {
        ellipse(this.x, this.y, 10);
    }
}
*/


