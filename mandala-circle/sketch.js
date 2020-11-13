function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background(10);
}

function draw() {
  background(10, 10, 10, 20);
  noFill();
  stroke(240, 240, 240, 50);
  strokeWeight(2);
  translate(width / 2, height / 2);
  drawCircle(0, 0, 600);
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 5) {
    push();
    translate(0, 0);
    rotate(-PI / 30 * frameCount / 5);
    drawCircle(x - d * 0.14, y - d * 0.14, d * 0.6);
    drawCircle(x, y, d * 0.3);
    //drawCircle (x, y+d*0.5, d*0.5);
    //drawCircle (x, y-d*0.5, d*0.5);
    pop();
  }
}