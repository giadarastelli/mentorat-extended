var serieFibonacci = [];
var i;
var gui;
var myStroke = 2; 
var backgroundOpacity=255; 
var colorR=255;
var colorG=255; 
var colorB=255; 
var myRotation=25; 
var morph; 
var numFibonacci= 10; 
var lenghtForm=1.5; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  //frameRate(30);
  angleMode(RADIANS); 
  //noLoop();

  //GUI Strokeweight
  sliderRange(1, 10, 1);
  gui = createGui('my guis :) ');
  gui.addGlobals('myStroke');
  
  //GUI opacity
  sliderRange(1, 255, 1);
  gui.addGlobals('backgroundOpacity');
  
  //GUI colors
  sliderRange(0, 255, 1);
  
  //GUI R
  gui.addGlobals('colorR');
  //GUI G
  gui.addGlobals('colorG');
  //GUI B
  gui.addGlobals('colorB');
  
  //GUI rotation
  sliderRange(-50, 50, 5);
  gui.addGlobals('myRotation');
  
  
  //GUI numFibonacci
  sliderRange(0, 20, 1);
  gui.addGlobals('numFibonacci');
  
  
  //GUI Y lenghtForm
  sliderRange(1.5, 2, 0.1);
  gui.addGlobals('lenghtForm');
  

  
}

function draw() {
  background(0, 0, 0, backgroundOpacity);
  stroke(colorR, colorG, colorB);
  strokeWeight(myStroke); 
  noFill();
  translate(width / 3, height / 3);
  rotate(frameCount / myRotation);
  
  

  for (var n = 0; n < numFibonacci; n++) {
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

    serieFibonacci[n] = i;

    ellipse(0, 0, i*2, i * lenghtForm);

    //OTHER FORMS
    //arc(0, 0, i * 2, i * 2, 0, PI / 2);
    //line(0, i, i * 3, i * 3);
    //rect(0, 0, i, i);
    rotate(PI / 2);
    translate(-serieFibonacci[n - 1], 0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
