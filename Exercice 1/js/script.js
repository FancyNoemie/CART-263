/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let xPosition;
let yPosition;
let y = 250;
let border = 20;
let wPlayer = 70;
let ballY = 250;
let ballX = 250;

function preload() {
}


function setup() {
   
}


function draw() {
    createCanvas(500,500);
    background(0,230,30);
    rect(border, y-(wPlayer/2), border, wPlayer); //PLAYER
    print(y);
    if (keyIsDown(UP_ARROW)||keyIsDown(87)) {
        y -= 5;
      }
    if (keyIsDown(DOWN_ARROW)||keyIsDown(83)) {
        y += 5;
      }
    if (y<=0+(wPlayer/2)){
        y=0+(wPlayer/2)
    }
    if (y>=width-(wPlayer/2)){
        y=width-(wPlayer/2)
    }
    rect(width-border-border , y-(wPlayer/2), border , wPlayer); //OPPONENT
    circle(ballY,ballX, 20);
}

function keyIsDown (){
    if (keyCode === 87){
        y -= 5;
        print (keyCode);
    } else if (keyCode === 83){
        y +=5;
    }

}