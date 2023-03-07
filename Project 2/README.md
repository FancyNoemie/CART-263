# Data Visualisation
# Noémie Carrier

Here is my project for CART 263, DATA VISUALISATION
I will try to illustrate the complexity and richness of a community based(?) library of projects and information.
Ideally, the user will be able to navigate the different themes and subjects to find a project in particular. 

This will simply be a fun and interactive way to navigate the library, based on data from the projects submitted between 2005 and 2020.
https://www.kaggle.com/datasets/kingburrito666/instructables-diy-all-projects?select=projects_circuits.csv


Here is the chunk of code I used to detect errors in my .csv file. At first, the code would only break and not tell me which line of the csv file was wrong. I found out that some lines were empty, and the code could not return a string of text, because there was no text! This only points me to the problematic line, so I can do my data pre-processing.
(in setup)
for (var r = 0; r < circuits.getRowCount(); r++){ // Cycle through each row of the table
    //points[r] = new DataPoint(circuits.getString(r,2)); 
    try{//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
      console.log(circuits.getString(r,3));
    }
    catch(error){
      console.error("There was an error of type ("+error+") at line "+r+" of the csv file.");
      alert(r);
    }
  } 

// The Prime Spiral (aka Ulam Spiral)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/167-prime-spiral.html
// https://youtu.be/a35KWEjRvc0

//(∩^o^)⊃━☆array
    //check the string dans subcategory
    //compare to see if it's already in the array?? https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
    //https://www.w3schools.com/jsref/jsref_includes_array.asp

Ideas for the future;
identifications
hand pick colors
choose between the big categories
do something with the most popular projects of each categories, get the name or a link <3
