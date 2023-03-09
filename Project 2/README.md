
# Data Visualization

# Noémie Carrier

Here is my project for CART 263, DATA VISUALIZATION
It is based on data from the projects submitted by the community between 2005 and 2020.
https://www.kaggle.com/datasets/kingburrito666/instructables-diy-all-projects?select=projects_circuits.csv

Original idea:

I will try to illustrate the complexity and richness of a community based(?) library of projects and information.
Ideally, the user will be able to navigate the different themes and subjects to find a project in particular. 


How it works:

Right now, the code takes the values of the circuits section of the website. There is also a cooking, craft, living, outside and workshop section that I integrated to the code, that I can easily switch between. 
You can see two main information being visualized; 
 1. All the subcategories are updated as the code reads the .csv file, and are associated to a random color.
 2. The size of the dot varies depending on the amount of people that put the specific project in their favorites.

 The visual is based on the Prime Spiral (aka Ulam Spiral) made by the Coding Train / Daniel Shiffman. I kept mostly the part of the code that calculates when the spiral "turns". You can read more about it here: 
 https://thecodingtrain.com/CodingChallenges/167-prime-spiral.html 
 https://youtu.be/a35KWEjRvc0

Challenges:

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

Another important element was the "include" part, to check if something is already in the array.
  https://www.w3schools.com/jsref/jsref_includes_array.asp

> Debugging for the future:
> There is a main bug I did not have the chance to fix, and it's the first 4 dots and titles appearing white and black respectively.
> They appear in default colors, meaning they were not assigned any colors yet when they appeared. So my theory is this: for a mysterious reason, the array sub and subColor do not correspond. Meaning that the "sub" array is 4 data ahead from the subColor. There might be a workaround if I can fin a way to use the return data of the "sub" instead. 

> Plans for the future:
> Integrate the 6 different datasets
> Hand pick colors, to better see the difference
> Choose between the big categories, and maybe even subcategories, with a preview of how popular they are (choosing between different blob sizes)
> Do something with the most popular projects of each categories, get the name or a link <3
