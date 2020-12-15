var color = 0;
var gui;

//SLIDER GUI VARIABLES
var lineweight = 3;
var shapes = 2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    noFill();
    stroke(255);

    //GUI SLIDER
    gui = createGui('mix and modify as you wish!');

    //GUI strokeweight
    sliderRange(1, 5, 1);
    gui.addGlobals('lineweight');


    //GUI shape
    sliderRange(1, 2, 1);
    gui.addGlobals('shapes');

}

function draw() {
    background(10);

    color = map(mouseY, 0, 300, 0, 255);

    if (shapes <= 1) {
        strokeWeight(10);
        ellipse(width / 2, height / 2, 100);
    }

    if (shapes >= 2) {
        strokeWeight(10);
        rect(width / 2, height / 2, 100, 100);
    }

    // if (mouseX < width / 2) {
    //     strokeWeight(lineweight);
    //     ellipse(width / 2, height / 2, 100);
    // }

    // if (mouseX >= width / 2 && mouseX <= width) {
    //     strokeWeight(lineweight);
    //     rect(width / 2, height / 2, 100, 100);
    // }

    // if (mouseX > 200) {
    //     noStroke();
    //     fill(color);
    //     triangle(125, 175, 150, 125, 175, 175);
    //

}