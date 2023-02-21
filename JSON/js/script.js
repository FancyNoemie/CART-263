let weather;
function preload() {
  weather = loadJSON('https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&hourly=temperature_2m,cloudcover&daily=weathercode,temperature_2m_max,sunrise,sunset&current_weather=true&timezone=auto');
}

function setup() {
  createCanvas(500, 500);
  let cover = map(weather.hourly.cloudcover,0,100,0,255);
  background(weather.hourly.cloudcover);

  print(weather);
  //print("The Weather:")
  print("Located at: "+ weather.latitude+", "+weather.longitude);  
  print("Current temp: "+ weather.current_weather.temperature);
  print("Current wind speed: "+ weather.current_weather.windspeed);
  print("Current wind direction: "+ weather.current_weather.winddirection);
  print("Cloud cover:"+weather.hourly.cloudcover);
  print("Weather code:"+ weather.daily.weathercode);
  print("The hourly temperature is (in C): ")
  for(let i = 0; i < 5; i++){
    (weather.hourly.temperature_2m[i]+" C");
  }
  fill(255);
  text("Current Wind Speed: " + weather.current_weather.windspeed +"  Current Wind Direction: "+ weather.current_weather.winddirection, 200,200);
  let x=map(weather.latitude,-90,90,0,500);
  let y=map(weather.longitude,-180,180,0,500);
  ellipse(x,y,40);

  ellipse(40,400, weather.daily.weathercode[0]);
  text("Day 1",20,450);
  ellipse(90,400, weather.daily.weathercode[1]);
  text("Day 2",70,450);
  ellipse(140,400, weather.daily.weathercode[2]);
  text("Day 3",120,450);
  ellipse(190,400, weather.daily.weathercode[3]);
  text("Day 4",170,450);
  ellipse(240,400, weather.daily.weathercode[4]);
  text("Day 5",220,450);

  text("Current time: " + weather.current_weather.time, 40,40);

}
function draw(){
  
}

