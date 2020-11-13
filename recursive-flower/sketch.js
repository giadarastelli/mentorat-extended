function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  frameRate(30);  
}

function draw() {
  background(10, 10, 10,20);
  translate(width/2, height/2);  
  //rotate(frameCount/100);
  
  for (var i = 1; i < 8; i++) {
    rotate(PI/4);
    stroke(0, 180, i * 255 /8); 
    strokeWeight(2); 
    
    
    push(); 
    rotate(-frameCount/100); 
    ellipse(0, 0, i*80, i*20);
    pop();  
    
    push(); 
    rotate(frameCount/100);
    ellipse(0, 0, i*20, i*80);
    pop(); 
    
    push(); 
    rotate(-frameCount/300); 
    ellipse(0, 0, i*80, i*20);
    pop();  
    
    push(); 
    rotate(frameCount/300)
    ellipse(0, 0, i*20, i*80);
    pop(); 
    
  
  
  }
}