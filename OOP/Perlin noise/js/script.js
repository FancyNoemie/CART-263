/**

Noémie Carrier
Experiments with one dimentional noise
http://web.archive.org/web/20160530124230/http://freespace.virgin.net/hugo.elias/models/m_perlin.htm
*/

var xoffset1 = 0;
var xoffset2 = 2;
var inc = 0.01;
var start = 0;

function setup() {
    createCanvas(400, 400);

}
function draw() {
    background(33, 50, 56);
    stroke(255);
    
    for(var x = 0; x < width; x++){
        noiseDetail(4,0.2);//Default: (4,0.5)
        var y = map(noise(xoffset1),0,1,200,400); //Perlin noise is always a value between 0 and 1
        point(x,y);

        
    }
    xoffset += 0.02; //so it doesn't just make a straight line
}

