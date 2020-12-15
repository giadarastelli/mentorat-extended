// WAVE PROJECT OF LAST SEMESTER REVISITED 

let petals = [];
let num_petals; //no petals at first
var outDiam = 0;
let opacityCol;
let button;

//SLIDER GUI VARIABLES
var numberforms = 10;
var speed = 1;
var colors = 255;
var gui;
var lineweight = 2;
var fade = 30;


var sound;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
    noFill();
    rectMode(CENTER);

    sound = loadSound("Parade.mp3", loaded);

    //BUTTON INSTEAD OF TOUCHSTARTED

    // button = createButton("click me");
    // button.position(windowWidth / 2, 90);
    // button.size(50, 50);
    // button.style('font-size', '10px');
    // button.style("text-transform", "uppercase");
    // button.touchStarted(changeF);


    //GUI SLIDER
    gui = createGui('mix and modify as you wish!');

    //GUI opacity background
    sliderRange(1, 255, 1);
    gui.addGlobals('fade');

    //GUI speedrotation
    sliderRange(1, 50, 1);
    gui.addGlobals('speed');

    //GUI number forms
    sliderRange(1, 20, 1);
    gui.addGlobals('numberforms');

    //GUI colors
    sliderRange(0, 255, 1);
    gui.addGlobals('colors');

    //GUI strokeweight
    sliderRange(1, 5, 1);
    gui.addGlobals('lineweight');


}

function loaded() {}

function touchStarted() {
    sound.play();
    let myPetal = new Petal(0, 0);
    petals.push(myPetal);

}

// function changeF() {
//     let myPetal = new Petal(0, 0);
//     petals.push(myPetal);
// }

function draw() {
    background(0, 0, 0, fade);
    translate(width / 2, height / 2);

    let volumeSound = map(mouseX, 0, width, 0, 1);
    sound.amp(volumeSound);

    let speedSound = map(mouseY, 2, height, 2, 0.5);
    sound.rate(speedSound);

    for (const wav of petals) wav.display();

    for (let n = 0; n < petals.length; n++) {
        if (petals[n].outDiam > width) {
            petals.slice(n, 1);
        }
    }
}

class Petal {
    constructor() {
        this.outDiam = 0;
    }

    display() {
        for (let count = 0; count < numberforms; count++) {
            let diam = this.outDiam - numberforms * count;
            if (diam > 0) {
                opacityCol = map(diam, 0, width / 1.5, 255, 0);
                stroke(colors, 180, diam, opacityCol);
                strokeWeight(lineweight);

                push();
                rotate(speed * diam / frameCount);

                //position for 5 shapes : width / 6, width / 3, width / 2, width / 1.5, width / 1.2
                if (mouseX < width / 3) {
                    ellipse(0, 0, diam, diam / 3);
                }
                if (mouseX >= width / 3 && mouseX <= width / 1.5) {
                    ellipse(0, 0, diam, 0); //line
                }
                if (mouseX >= width / 1.5 && mouseX <= width) {
                    rect(0, 0, diam, diam);
                }
                pop();
                //console.log("diam")  ; 
            }
        }
        this.outDiam = this.outDiam + 5;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}