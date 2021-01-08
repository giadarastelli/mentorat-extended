var gui;

//SLIDER GUI VARIABLES
var volume = 0.4;
var fade = 20;

//SOUND VARIABLES
var sound;
var amp;
var sizeAmp;
var vol = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(30);

  sound = loadSound("Invocation.mp3", loaded);
  sound.setVolume(vol);
  amp = new p5.Amplitude();

  //GUI SLIDER
  gui = createGui('“ wait for sound ♪ ... then move the mouse ”'); //empty text p5 gui

  //GUI opacity background
  sliderRange(1, 100, 1);
  gui.addGlobals('fade');

  //GUI volume
  sliderRange(0, 1, 0.1);
  gui.addGlobals('volume');
}

function loaded() {
  sound.play();
}

function draw() {
  background(0, 0, 0, fade);

  sound.setVolume(volume);
  vol = amp.getLevel();
  sizeAmp = map(vol, 0, 1, 0, 200);


  noFill();

  strokeWeight(sizeAmp / 10);
  translate(width / 2, height / 2);

  push();
  rotate(-PI / 30 * frameCount / 40);
  stroke(50, 10, 40, sizeAmp * 5);
  drawCircle(0, 0, mouseX * 4);
  pop();
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 5) {

    push();
    translate(0, 0);

    // circle rotation 1
    push();
    rotate(-PI / 30 * frameCount / 20);
    stroke(50, d / 5, mouseY / 2, sizeAmp * 5);
    //stroke(diam, 170, mouseY / 2, opacityCol);
    drawCircle(x - d * 0.14, y - d * 0.14, d * 0.6);
    pop();

    //circle rotation 2
    push();
    rotate(PI / 30 * frameCount / 5);
    stroke(d / 5, 100, mouseY / 2, sizeAmp * 5);
    drawCircle(x, y, d * 0.3);
    pop();

    pop();

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}