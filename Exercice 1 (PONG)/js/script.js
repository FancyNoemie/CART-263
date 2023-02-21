/**
PONG!
Noémie Carrier

This is my attempt at the first exercice from CART263 at concordia
the length of the paddles can be changed by changing the wPlayer variable OwO

The code still needs minor details for the collision to be clean... it overlaps a bit.
And it might need a start button! XD
*/

"use strict";
let xPosition;
let yPosition;
let i = 250;
let j = 250;
let border = 20;
let wPlayer = 90;
let ballY = 250;
let ballX = 250;
let moveX = 3;
let moveY = 1;
let button;
let player1 = 0;
let player2 = 0;

function preload() {
}

function setup() {
}

function draw() {
    createCanvas(500,500);
    background(165, 166, 173);
    fill(44, 45, 51);
    noStroke();
    ////////////////////////////////////WINNER MENU///////////////////////////////////////////////
    if (player1 == 10){
        print("PLAYER ONE WINS!! ヾ(⌐■_■)ノ♪");
        textSize(width / 10);
        textAlign(CENTER, CENTER);
        text("PLAYER ONE WINS!! ヾ(⌐■_■)ノ♪",0,200,width);
    }
    if (player2 == 10){
        print("PLAYER TWO WINS!! ヾ(⌐■_■)ノ♪");
        textSize(width / 10);
        textAlign(CENTER, CENTER);
        text("PLAYER TWO WINS!! ヾ(⌐■_■)ノ♪",0,200,width);
    }
    else{    
    ////////////////////////////////////PLAYERS ANIMATION///////////////////////////////////////////////
    rect(border, i-(wPlayer/2), border, wPlayer); //Player 1
    if (keyIsDown(87)) {
        i -= 5;
      }
    if (keyIsDown(83)) {
        i += 5;
      }
    if (i<=0+(wPlayer/2)){
        i=0+(wPlayer/2)
    }
    if (i>=width-(wPlayer/2)){
        i=width-(wPlayer/2)
    }
    rect(width-border-border , j-(wPlayer/2), border , wPlayer); //Player 2
    if (keyIsDown(UP_ARROW)) {
        j -= 5;
      }
    if (keyIsDown(DOWN_ARROW)) {
        j += 5;
      }
    if (j<=0+(wPlayer/2)){
        j=0+(wPlayer/2)
    }
    if (j>=width-(wPlayer/2)){
        j=width-(wPlayer/2)
    }
    //////////////////////////////////////BALL ANIMATION//////////////////////////////////////////////////////
    circle(ballX,ballY, 20);
    
    ballX = ballX + moveX;
    ballY = ballY + moveY;
    //Limits vertical axis
    if (ballY < 0){
        moveY = moveY * -1;
    }
    if (ballY > height){
        moveY = moveY * -1;
    }
    //Limits horizontal axis
    if (ballX < 0){
        ballX = 250;
        ballY = 250;
        moveX = moveX *-1;
        player1 = player1+1;
        print(player1);
        print("points for player 1")
    }
    if (ballX > height){
        ballX = 250;
        ballY = 250;
        moveX = moveX *-1;
        player2 = player2+1;
        print(player2);
        print("points for player 2")
    }
    //Limits with the paddles
    if (ballX == border+border & ballY > (i-(wPlayer)) & ballY < i+(wPlayer/2)){
        moveX = moveX * -1;
        print("boop!");
    }
    if (ballX == 500-border-border & ballY > (j-(wPlayer)) & ballY < j+(wPlayer/2)){
        moveX = moveX * -1;
        print("boop!");
    }
    }
}

function keyIsDown (){
    if (keyCode === 87){
        y -= 5;
        print (keyCode);
    } else if (keyCode === 83){
        y +=5;
    }

}
