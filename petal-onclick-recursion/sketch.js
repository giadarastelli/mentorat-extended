// WAVE PROJECT OF LAST SEMESTER REVISITED 

let petals = [];
let num_petals; //no petals at first
var outDiam = 0;
let opacityCol;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
    rectMode(CENTER);
}

function mouseClicked() {
    let myPetal = new Petal(0, 0);
    petals.push(myPetal);

}

function draw() {
    background(0, 0, 0, 100);
    translate(width / 2, height / 2);
    for (const wav of petals) wav.display();
}

class Petal {
    constructor() {
        this.outDiam = 0;
    }

    display() {
        for (let count = 0; count < 20; count++) {
            let diam = this.outDiam - 10 * count;
            if (diam > 0) {
                opacityCol = map(diam, 0, width / 1.5, 255, 0);
                stroke(255, 255, 255, opacityCol);
                noFill();

                push();
                rotate(diam);
                //rotate(diam*frameCount/1000);
                rect(0, 0, diam, diam);

                //OTHER FORMS
                //ellipse(0,0, diam, diam/3);
                // line(0,0, diam, diam);
                pop();

                //console.log("diam")  ; 
            }

        }

        this.outDiam = this.outDiam + 3;
    }
}