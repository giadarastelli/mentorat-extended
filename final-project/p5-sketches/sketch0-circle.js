function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  frameRate(30);
}

function draw() {
  background(0, 0, 0, 25);

  translate(width / 2, height / 2);
  rotate(PI - frameCount / 20);
  let col = map(mouseX, 0, width, 0, 180);
  let diam = map(mouseX, 0, width, 380, 650);
  strokeWeight(1);
  stroke(col, 100, 50, 150);
  noFill();
  ellipse(0, 0, 450, diam);
  // ellipse(0, 0, random(450, 460), diam);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}