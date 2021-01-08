// WAVE PROJECT OF LAST SEMESTER REVISITED 

let petals = [];
let num_petals; //no petals at first
var outDiam = 0;
let opacityCol;
let button;
var speed = 1;

//SLIDER GUI VARIABLES
var gui;
var clones = 1;
var lineweight = 2;
var fade = 100;
var shape = 1;

//SOUND VARIABLES
var sound;
var reverb;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
    noFill();
    rectMode(CENTER);

    sound = loadSound("Song for Ramanujan (Saraswati Devi).mp3", loaded);
    reverb = new p5.Reverb();
    sound.disconnect(); // to only hear reverb

    // 5 second reverb time, decayRate of 1%
    reverb.process(sound, 5, 1);

    //GUI SLIDER
    gui = createGui('“ click anywhere & move the mouse ”'); //text p5 gui
    // gui = createGui('change the values ✎');

    //GUI number forms
    sliderRange(1, 20, 1);
    gui.addGlobals('clones');

    //GUI opacity background
    sliderRange(1, 255, 1);
    gui.addGlobals('fade');

    //GUI colors
    sliderRange(0, 255, 1);
    gui.addGlobals('colors');

    //GUI strokeweight
    sliderRange(1, 5, 1);
    gui.addGlobals('lineweight');

    //GUI shape
    sliderRange(1, 3, 1);
    gui.addGlobals('shape');


}

function loaded() {
    sound.play();
}

function touchStarted() {
    let myPetal = new Petal(0, 0);
    petals.push(myPetal);

}

function draw() {
    background(0, 0, 0, fade);
    translate(width / 2, height / 2);


    //VOLUME DEPENDING ON Y-AXIS
    let volumeSound = map(mouseY, 1, height, 1, 0.1);
    sound.amp(volumeSound);

    //ECHO EFFECT 
    let echoEffect = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
    reverb.drywet(echoEffect);

    // let speedSound = map(mouseY, 2, height, 2, 0.5);
    // sound.rate(speedSound);

    // let speedSound = map(mouseX, 1.5, width, 1.5, 1);
    // sound.rate(speedSound);

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
        for (let count = 0; count < clones; count++) {
            let diam = this.outDiam - clones * count;
            if (diam > 0) {
                opacityCol = map(diam, 0, width, 255, 0);
                stroke(diam, 170, mouseY / 2, opacityCol);
                strokeWeight(lineweight);

                push();
                //rotate(speed * diam / frameCount);
                //rotate(mouseX * diam / speed);
                rotate(-PI / mouseX * diam);

                //position for 5 shapes : width / 6, width / 3, width / 2, width / 1.5, width / 1.2
                // if (mouseX < width / 3) {
                //     ellipse(0, 0, diam, diam / 3);
                // }
                // if (mouseX >= width / 3 && mouseX <= width / 1.5) {
                //     ellipse(0, 0, diam, 0); //line
                // }
                // if (mouseX >= width / 1.5 && mouseX <= width) {
                //     rect(0, 0, diam, diam);
                // }


                if (shape <= 1) {
                    ellipse(0, 0, diam, diam / 3);
                }

                if (shape >= 2 && shape < 3) {
                    ellipse(0, 0, diam, 0);
                }
                if (shape >= 3) {
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