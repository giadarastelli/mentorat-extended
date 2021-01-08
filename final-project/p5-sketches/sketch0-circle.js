var r = 0;
var g = 180;
var b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  frameRate(30);
}

function draw() {
  background(0, 0, 0, 30);

  r = map(mouseX, 0, 600, 0, 255);
  g = map(mouseX, 0, 600, 0, 200);
  b = map(mouseY, 0, 600, 255, 0);


  translate(width / 2, height / 2);
  rotate(PI - frameCount / 30);
  strokeWeight(1);
  stroke(r, g, b);
  noFill();
  if (mouseX <= width / 3) {
    ellipse(0, 0, width / 3, 375);
  }

  if (mouseX >= width / 3) {
    ellipse(0, 0, mouseX, 375);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}