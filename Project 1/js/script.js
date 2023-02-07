/**
Morning breeze
Noémie Carrier

An abstract representation of the process of waking up.

To do;
(∩^o^)⊃━☆Line particles
(∩^o^)⊃━☆Display them on a horizontal manner 
(∩^o^)⊃━☆impliment the perlin noise function to order them in the y axis https://p5js.org/reference/#/p5/noise 
(∩^o^)⊃━☆Make them move vertically in relation to each other
(∩^o^)⊃━☆Make the color palette change with time
Make the color vary (lerp value changing over the number of clicks)
Make the particles move depending on the speed of the mouse
Add sound effects
++ Particles drop down from the top
++ Blurry effect
*/

"use strict";
let lines = []; // declare an array
var offset=0;
let value = 0;

function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    noiseDetail(2, 0.2);// original parameters (4,0.5)
    for(let x = 0; x < width; x+=20){
        var y = height * noise(x);
        lines[x] = new Particle(x,y);
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
/**
function mouseClicked(){
        value += 0.1;
        for(let i = 0; i< lines.length; i+= 20){
            lines[i].changeColor(value);
        }
        
    }
    */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Particle { //Class - The part of code that holds all the information to make an object, like a blue print. 
    constructor(x,y) { //Constructor - A piece of code that runs when you make an instance, like Setup. 
    //Every class needs a constructor. Its a good place to put all your variables. 
        this.x = x;
        this.y = y;
        this.offset = 0;
        this.lineHeight = 0;
        this.colorOrigin = color(random(83,95), random(19,32), random(68,80));
        this.colorLerp1 = color(random(150,255),random(4,15),random(5,18));
        this.colorLerp2 = color(random(220,255),random(220),random(218));
        this.interA;
        this.interB;
        this.value = value;
        
    }
    drawRectangle(){ //Method - a function that belongs to a class. 
        this.interA = lerpColor(this.colorOrigin,this.colorLerp1,this.value);
        this.interB = lerpColor(this.colorLerp1,this.colorLerp2,this.value-1);
        if (this.value <= 1){
            fill(this.interA);
            this.value += 0.001;  
        }else if(this.value > 1){
            fill(this.interB);
            this.value += 0.001;
        }
        rect(this.x, this.y, 19, -this.lineHeight, 5);
        noiseDetail(2, 0.1*this.value);// original parameters (4,0.5)
    }
    changeHeight(offset,i){
        this.lineHeight = 40*this.value+(noise((2+i/100)+offset))*500;//increases overtime with this.value
        //lines[i].lineHeight = map(noise(i/100,offset),0,1,300,10); // why is it so different?????
    }
    changeY(offset,i){
        this.y = map(noise(i/100,offset),0,1,windowHeight/2,windowHeight);
    }
    /**
    changeColor(value){
        console.log(value);
        if (value <= 1){
            fill(this.interA);
        }else if(value > 1){
            fill(this.interB);
        }
    }*/
}
