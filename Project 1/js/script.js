/**
Morning breeze
Noémie Carrier

An abstract representation of the process of waking up.

To do;
(∩^o^)⊃━☆Line particles
(∩^o^)⊃━☆Display them on a horizontal manner 
(∩^o^)⊃━☆impliment the perlin noise function to order them in the y axis https://p5js.org/reference/#/p5/noise 
(∩^o^)⊃━☆Make them move vertically in relation to each other
Make the color vary (lerp value changing over the number of clicks)
Make the color palette change with time
Make the particles move depending on the speed of the mouse
Add sound effects
++ Particles drop down from the top
++ Blurry effect
*/

"use strict";
let lines = []; // declare an array
var offset=0;
var r;
var g;
var b;
var r1;
var g1;
var b1;

function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    noiseDetail(2, 0.2);// original parameters (4,0.5)
    for(let x = 0; x < width; x+=20){
        var y = height * noise(x);
        lines[x] = new Particle(x,y);
        r = random(83,93);
        g = random(19,29);
        b = random(64,74);
        lines[x].setColor(r,g,b);
    }
}
function draw() {
    background(33, 50, 56);
    for(let i = 0; i< lines.length; i+= 20) {
        lines[i].changeHeight(offset,i);
        lines[i].changeY(offset,i); 
        lines[i].drawRectangle();
    }
    this.offset += 0.01;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Particle { //Class - The part of code that holds all the information to make an object, like a blue print. 
    constructor(x,y) { //Constructor - A piece of code that runs when you make an instance, like Setup. 
    //Every class needs a constructor. Its a good place to put all your variables. 
    
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.offset = 0;
        this.lineHeight = 0;
        this.colorRectangle;
    }
    drawRectangle(){ //Method - a function that belongs to a class. 
        fill(this.colorRectangle);
        rect(this.x, this.y, 19, -this.lineHeight, 5);
    }
    setColor(r,g,b){
        //fill(this.lineHeight,map(noise(offset),0,1,0,255),b);
        this.colorRectangle = color(r+this.offset, g, b);
        this.offset += 0.1;
       
    }
    changeHeight(offset,i){
        this.lineHeight = 50+(noise((2+i/100)+offset))*500;
        //lines[i].lineHeight = map(noise(i/100,offset),0,1,300,10); // why is it so different?????
    }
    changeY(offset,i){
        this.y = map(noise(i/100,offset),0,1,windowHeight/2,windowHeight);
    }
}
