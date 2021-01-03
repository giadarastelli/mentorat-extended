var serieFibonacci = [];
var i;

//SLIDER GUI VARIABLES
var gui;
var lineweight = 1;
var fade = 30;
var spin = 50;
var circles = 10; //numFibonacci
var shape = 2; //ellipse or line
var volume = 0.4;

//SOUND VARIABLES
var sound;
var amp;
var size;
var vol = 0.5;

function preload() {
  sound = loadSound("Dandy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(RADIANS);

  sound.play();
  sound.setVolume(vol);
  amp = new p5.Amplitude();

  //GUI numFibonacci = number forms on the canvas
  gui = createGui('change the values ✎');
  sliderRange(0, 20, 1);
  gui.addGlobals('circles');

  //GUI opacity background
  sliderRange(1, 100, 1);
  gui.addGlobals('fade');

  //GUI strokeweight
  sliderRange(1, 5, 1);
  gui.addGlobals('lineweight');

  //GUI y-lenght
  sliderRange(0, 2, 0.1);
  gui.addGlobals('shape');

  //GUI form rotation
  sliderRange(-50, 50, 5);
  gui.addGlobals('spin');

  //GUI volume
  sliderRange(0, 0.5, 0.1);
  gui.addGlobals('volume');
}

function draw() {
  background(0, 0, 0, fade);

  sound.setVolume(volume);
  vol = amp.getLevel();
  size = map(vol, 0, 1, 0, 200);

  strokeWeight(lineweight);
  noFill();
  translate(width / 2, height / 2);
  rotate(frameCount / spin);

  for (var n = 0; n < circles; n++) {
    if (n <= 1) {
      i = 1;
    } else {
      i = serieFibonacci[n - 1] + serieFibonacci[n - 2];
    }
    //serieFibonacci.push(a); 

    //EXPLAINATION
    //0=>1,1=>1,2=>2,3=>3,4=>5,5=>8 
    //left : key  
    //right: value 

    stroke(size * 15, 30, n * circles);

    //opacity amplitude stroke 
    //stroke(size * 15, 30, n * circles, size * 10);
    serieFibonacci[n] = i;
    ellipse(0, 0, i * 2, i * shape);

    rotate(PI / 2);
    translate(-serieFibonacci[n - 1], 0);

    //OTHER FORMS
    //arc(0, 0, i * 2, i * 2, 0, PI / 2);
    //line(0, i, i * 3, i * 3);
    //rect(0, 0, i, i);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}