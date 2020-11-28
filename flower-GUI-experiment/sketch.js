var lenghtY=20; 
var opacityCol=30; 
var myStroke=2; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  frameRate(30);  
  
  //GUI Rotation
  sliderRange(0, width, 1);
  gui = createGui('hello guis');
  gui.addGlobals('lenghtY');
  
  
  //GUI OPACITY
  sliderRange(1, 255, 1);
  gui.addGlobals('opacityCol');
  
    //GUI STROKE
  sliderRange(1, 10, 1);
  gui.addGlobals('myStroke');
}

function draw() {
  background(10, 10, 10,opacityCol);
  translate(width/2, height/2);  
  //rotate(frameCount/100);
  
  for (var i = 1; i < 8; i++) {
    rotate(PI/4);
    stroke(0, 180, i * 255 /8); 
    strokeWeight(myStroke); 
    
    
    push(); 
    rotate(-frameCount/100); 
    ellipse(0, 0, i*80, i*lenghtY);
    pop();  
    
    push(); 
    rotate(frameCount/100);
    ellipse(0, 0, i*lenghtY, i*80);
    pop(); 
    
    push(); 
    rotate(-frameCount/300); 
    ellipse(0, 0, i*80, i*lenghtY);
    pop();  
    
    push(); 
    rotate(frameCount/300)
    ellipse(0, 0, i*lenghtY, i*80);
    pop(); 
    
  
  
  }
}