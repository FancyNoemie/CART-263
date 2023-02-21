/**
/////////////////////////////////////DATA PRINT//////////////////////////////////////////
let table;
function preload() {
  table = loadTable("EVA_Data.csv", "csv", "header");
}
function setup() {
  createCanvas(500, 500);
  console.log(table.getRowCount() + " total rows in table");
  console.log(table.getColumnCount() + " total columns in table");
  console.log(table.getColumn("Crew"));
  // use a nested for loop to cycle through the table's cells
  for (var r = 0; r < table.getRowCount(); r++){
    ellipse(random(500), random(500), int(table.getString(r,5))*3);
    for (var c = 0; c < table.getColumnCount(); c++) {
      console.log(table.getString(r, c));
    }
  }
}
function draw(){

}
*/


//////////////////////////////////////SAMPLE DATA/////////////////////////////////////////
let table;
let points = [];

function preload() {
  table = loadTable("EVA_Data.csv", "csv", "header");
}

function setup() {
  createCanvas(800, 800);
  background(1,30,30);
  for (var r = 0; r < table.getRowCount(); r++){ // Cycle through each row of the table
      points[r] = new DataPoint(table.getString(r, 1), 
                                table.getString(r, 2), 
                                table.getString(r, 5), 
                                table.getString(r, 0),
                                table.getString(r,4));
                                // Pass through the values in each row
      points[r].drawBasic();

  }
  
}
class DataPoint { 
    constructor(country, name, duration, ID, date){ 
        // Add each data point to the object
        this.country = country;
        this.duration = duration;
        this.name = name;
        this.ID = ID;
        this.date = date;
        
        this.dateSplit = int(splitTokens(date,"/"));

        this.x;
        this.y;
    }

    drawBasic(){ 

      // something something 4 for loops, checking year, checking month, checking date
      console.log(this.dateSplit);

        this.x = random(width);
        this.y = random(height);
        noStroke();
        if(this.country=="USA"){
          fill(0,40,200);
          text(this.name,this.x,this.y);
          
        }
        if(this.country=="Russia"){
          fill(100,160,250);
          text(this.name,this.x,this.y);
        }
        ellipse(this.x, this.y,int(this.duration)*3);
        
        
        
    }

    

    drawCircle(){
        this.radius = 150;
        this.t=0;
        this.angle = map(this.ID, 0, table.getRowCount(), 0, 1)*Math.PI*2;
        this.x = Math.cos(this.angle)*this.radius+width/2;
        this.y = Math.sin(this.angle)*this.radius+height/2;
        noStroke();
        fill(0, 200, 20, 40);
        ellipse(this.x, this.y,int(this.duration)*3);
        fill(0, 100, 200);
        textSize(5);
        push();
        if(this.angle > Math.PI/2 && this.angle < Math.PI*1.5){
          this.t = textWidth(this.name);
          fill(255, 0,0);
          translate(this.x, this.y);
          rotate(this.angle+Math.PI);
        } else { 
          translate(this.x, this.y);
          rotate(this.angle);
        }
        text(this.name, 0-this.t, 0);
        pop();
    }
}



