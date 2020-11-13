var serieFibonacci = [];
var i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  frameRate(30);
  //noLoop();
}

function draw() {
  background(0, 0, 0, 40);
  stroke(50, 150, 100);
  strokeWeight(2);
  noFill();
  translate(width / 3, height / 3);
  rotate(-frameCount / 10);

  for (var n = 0; n < 15; n++) {
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

    ellipse(0, 0, i * 2, i * 1.75);

    //OTHER FORMS
    //arc(0, 0, i * 2, i * 2, 0, PI / 2);
    //line(0, i, i * 3, i * 3);
    //rect(0, 0, i, i);
    rotate(PI / 2);
    translate(-serieFibonacci[n - 1], 0);
  }
}