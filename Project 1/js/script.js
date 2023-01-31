/**
Morning breeze
Noémie Carrier

An abstract representation of the process of waking up.

To do;
(∩^o^)⊃━☆Line particles
Display them on a horizontal manner 
impliment the perlin noise function to order them in the y axis https://p5js.org/reference/#/p5/noise 
Make them move vertically in relation to each other
Make the color vary
Make the particles move depending on the speed of the mouse
Make the color palette change with time
Add sound effects
++ Particles drop down from the top
++ Blurry effect
*/

"use strict";
let lines = []; // declare an array
var t;
function preload() {
}
function setup() {
    createCanvas(400, 400);
    noStroke();
    for(let i = 0; i < width; i++){
        let x=i;
        var y = height * noise(i/100);
    lines[i] = new Particle(0,x,y);
    }
    t=0;
}
function draw() {
    background(33, 50, 56);
    for(let i = 0; i< lines.length; i++) {
        //lines[i].display();
        lines[i].move();
    }
    for(let i = 0; i < width; i++){
        let x = i;
        var y = height * noise((i/110)+t/5);
    lines[i] = new Particle(x,y);
    }
    this.t += 0.005;
}
class Particle { //Class - The part of code that holds all the information to make an object, like a blue print. 
    constructor(x,y) { //Constructor - A piece of code that runs when you make an instance, like Setup. 
    //Every class needs a constructor. Its a good place to put all your variables. 
    
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.t = 0;
    }
    move(){ //Method - a function that belongs to a class. 
        //this.speed =  map(mouseX, 0, width, 7, 2); //left=fast
        //this.x += random(-this.speed, this.speed);
        this.y += noise(-this.speed, this.speed);
        rect(this.x, this.y, 10, 20, 5)
        fill(this.x,this.y,255);
    }





    //Garbage section
    display(){
        for(let j = 0; j < nrows; j++){
            this.y = j;
            j++;
            }
    }
    test(){
        var x1 = width * noise(this.t + 15);
        var x2 = width * noise(this.t + 25);
        var x3 = width * noise(this.t + 35);
        var x4 = width * noise(this.t + 45);
        var y1 = height * noise(this.t + 55);
        var y2 = height * noise(this.t + 65);
        var y3 = height * noise(this.t + 75);
        var y4 = height * noise(this.t + 85);
      
        bezier(x1, y1, x2, y2, x3, y3, x4, y4);
      
        this.t += 0.005;
    }
}
