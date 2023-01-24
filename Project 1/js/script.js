/**
Morning breeze
Noémie Carrier

An abstract representation of the process of waking up.

To do;
Line particles
Display them on a horizontal manner
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

function preload() {
}
function setup() {
    createCanvas(400, 400);
    noStroke();
    for(let i = 0; i < 50; i++){
    lines[i] = new Particle();
    }
}
function draw() {
    background(33, 50, 56);
    for(let i = 0; i< lines.length; i++) {
        lines[i].moveAndDisplay();
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
        //this.speed =  map(mouseX, 0, width, 7, 2); //left=fast
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        for(let j=0;j<100; j++) {
            rect(j, this.y, 10,20,5);
            j++;
        }
        rect(this.x, this.y, 10, 20, 5)
        fill(this.x,this.y,255);
    }
}
