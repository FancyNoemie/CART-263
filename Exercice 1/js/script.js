/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let xPosition;
let yPosition;
let i = 250;
let border = 20;
let wPlayer = 70;
let ballY = 250;
let ballX = 250;
let moveX =0;
let moveY = -1;

function preload() {
}


function setup() {
   
}


function draw() {
    createCanvas(500,500);
    background(0,230,30);
    ////////////////////////////////////PLAYERS ANIMATION///////////////////////////////////////////////
    rect(border, i-(wPlayer/2), border, wPlayer); //PLAYER
    
    if (keyIsDown(UP_ARROW)||keyIsDown(87)) {
        i -= 5;
      }
    if (keyIsDown(DOWN_ARROW)||keyIsDown(83)) {
        i += 5;
      }
    if (i<=0+(wPlayer/2)){
        i=0+(wPlayer/2)
    }
    if (i>=width-(wPlayer/2)){
        i=width-(wPlayer/2)
    }
    rect(width-border-border , i-(wPlayer/2), border , wPlayer); //OPPONENT
    //////////////////////////////////////BALL ANIMATION//////////////////////////////////////////////////////
    circle(ballX,ballY, 20);
    
    ballX = ballX + moveX;
    ballY = ballY + moveY;
    print(ballY);
    if (ballY < 0){
        moveY = 2;
        
    }
    if (ballY > height){
        moveY = -2;
        print("hey");
    }
    print(ballY);
    if (ballY < 0){
        moveY = 2;
        
    }
    if (ballY > height){
        moveY = -2;
        print("hey");
    }swsssw
}

function keyIsDown (){
    if (keyCode === 87){
        y -= 5;
        print (keyCode);
    } else if (keyCode === 83){
        y +=5;
    }

}