var gui;

//SLIDER GUI VARIABLES
var volume = 0.4;
var fade = 30;
var lineweight = 2;
var sizeform = 350;
var colors = 255;

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
  gui = createGui('mix and modify as you wish!');

  //GUI size form
  sliderRange(0, windowWidth * 3, 10);
  gui.addGlobals('sizeform');

  //GUI opacity background
  sliderRange(1, 255, 1);
  gui.addGlobals('fade');

  //GUI strokeweight
  sliderRange(1, 5, 1);
  gui.addGlobals('lineweight');

  //GUI volume
  sliderRange(0, 1, 0.1);
  gui.addGlobals('volume');


  //GUI colors
  sliderRange(0, 255, 5);
  gui.addGlobals('colors');
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
  //stroke(colors, 240, colors / sizeAmp, 50);
  strokeWeight(lineweight);
  stroke(30, colors / 2, 100, sizeAmp * 5);
  translate(width / 2, height / 2);
  push();
  rotate(-PI / 30 * frameCount / 40);
  drawCircle(0, 0, sizeform);
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
    stroke(70, colors, 20 * d, sizeAmp * 5);
    drawCircle(x - d * 0.14, y - d * 0.14, d * 0.6);
    pop();

    //circle rotation 2
    push();
    rotate(PI / 30 * frameCount / 5);
    stroke(70, 30 * d, colors, sizeAmp * 5);
    drawCircle(x, y, d * 0.3);
    pop();

    pop();

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}