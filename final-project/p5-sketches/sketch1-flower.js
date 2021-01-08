var gui;

//SLIDER GUI VARIABLES
var volume = 0.4;
var lenght = 50;
var fade = 30;
var lineweight = 1;
var transparancy = 255;

//SOUND VARIABLES
var sound;
var amp;
var size;
var vol = 1;

function setup() {

  textSize(8);
  createCanvas(windowWidth, windowHeight);
  background(0);

  sound = loadSound("Empty Playground.mp3", loaded);
  sound.setVolume(vol);
  amp = new p5.Amplitude();

  noFill();
  frameRate(30);

  //GUI Y-lenght
  sliderRange(0, width / 2, 1);
  gui = createGui('“ wait for sound ♪ and change slider values ”'); //empty text p5 gui
  gui.addGlobals('lenght');

  //GUI opacity background
  sliderRange(1, 255, 1);
  gui.addGlobals('fade');

  //GUI strokeweight
  sliderRange(1, 5, 1);
  gui.addGlobals('lineweight');

  //GUI transparency stroke
  sliderRange(0, 255, 5);
  gui.addGlobals('transparency');

  //GUI volume
  sliderRange(0, 1, 0.1);
  gui.addGlobals('volume');
}

function loaded() {
  sound.play();
}

function draw() {

  background(0, 0, 0, fade);
  translate(width / 2, height / 2);

  sound.setVolume(volume);
  vol = amp.getLevel();
  size = map(vol, 0, 1, 50, 150);

  for (var i = 1; i < 8; i++) {
    rotate(PI / 4);
    stroke(0, 180, i * 255 / 8, transparancy);
    strokeWeight(lineweight);

    push();
    rotate(-frameCount / 100);
    ellipse(0, 0, i * size, i * lenght);
    pop();

    push();
    rotate(frameCount / 100);
    ellipse(0, 0, i * lenght, i * size);
    pop();

    push();
    rotate(-frameCount / 300);
    ellipse(0, 0, i * size, i * lenght);
    pop();

    push();
    rotate(frameCount / 300)
    ellipse(0, 0, i * lenght, i * size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}