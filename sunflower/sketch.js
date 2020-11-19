var n = 0;
var distance = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  angleMode(RADIANS);
  //frameRate(30);
}

function draw() {
  translate(width / 2, height / 2);
  var r = n + distance;
  var angle = n * 137.5; //golden ratio 137.5 --> sunflower

  //OTHER ANGLES
  //var angle = n * 45;
  //var angle = n * random(40,50);

  var x = r * cos(angle); //other example: (angle/2)
  var y = r * sin(angle);

  fill(angle % 255, 255, 0);
  stroke(angle % 255, 255, 0);
  //rotate(PI/4); 
  rect(x, y, n / 10);

  //OTHER FORMS
  //ellipse(x,y,n/10);
  //line(x,y,30,30);

  n = n + 1;
}