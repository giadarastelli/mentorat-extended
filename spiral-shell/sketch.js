var serieFibonacci = [];
var a; 

function setup(){
  createCanvas(600, 600);
  frameRate(30);
  //noLoop(); 
}

function draw(){ 
  background(0,0,0,40);
  strokeWeight(3);
  noFill(); 
  translate(width/3, height/3);
  rotate(-frameCount /10);
  for( var n = 0; n < 15; n++) {
    if(n<=1){
      a=1; 
    } else {
      a = serieFibonacci[n-1] + serieFibonacci[n-2]; 
    }
    //serieFibonacci.push(a); 
  
    //0=>1,1=>1,2=>2,3=>3,4=>5,5=>8 
    //left : key  
    //right: value 
    
    serieFibonacci[n]=a; 
    
    stroke(255,0,0);
    //ellipse(0,0,a * 2,a*1.75);
    arc(0,0,a*2,a*2,0,PI / 2);
    line(0,a,a*3,a*3); 
    rotate(PI/2);
    translate(-serieFibonacci[n-1],0); 
  } 
}