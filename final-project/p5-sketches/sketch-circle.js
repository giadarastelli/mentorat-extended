let points = 20;
let factor = 0;


//SOUND VARIABLES
var sound;
var amp;
var size;
var vol = 1;
var cosinus = 1;

function setup() {

    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS);

    sound = loadSound("Dandy.mp3", loaded);
    sound.setVolume(vol);
    amp = new p5.Amplitude();

}

function findPoints(num) {

    let angle = map(num, 0, points, 0, PI * 2); //PI*2
    let x = 200 * cos(angle - PI);
    let y = 200 * sin(angle - PI);
    let vec = createVector(x, y);
    return vec;
}

function loaded() {
    sound.play();
}

function draw() {
    background(0, 0, 0);

    sound.setVolume();
    vol = amp.getLevel();
    size = map(vol, 0, 1, 0, 200);

    factor = factor + 0.005;

    translate(width / 2, height / 2);
    stroke(255, 255, 255, size);
    //ellipse(0, 0, 400);
    noFill();
    for (let n = 0; n < points; n++) {
        let a = findPoints(n);
        let b = findPoints(n * factor);
        //line(a.x, a.y, b.x, b.y);
        ellipse(a.x, 0, b.x * size / 40, b.y);
        push();
        rotate(frameCount / 200);
        //ellipse(a.x * (mouseX / windowWidth), a.y * (mouseX / windowHeight), b.x * (size / 50), b.y * (size / 50));
        //ellipse(a.x * size / mouseX, a.y, b.x, b.y);
        pop();
    }

}