var n = 10;
var distance = 10;
var colOpacity = 0;


//SLIDER GUI VARIABLES
var spin = 10;
var fade = 30;
var volume = 1;
var twist = 1;

//SOUND VARIABLES
var sound;
var amp;
var size;
var vol = 1;

var switchDirection;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    rectMode(CENTER);
    angleMode(RADIANS);
    frameRate(30);
    switchDirection = false;
    noStroke();

    sound = loadSound("Tomie's Bubbles.mp3", loaded);
    sound.setVolume(vol);
    amp = new p5.Amplitude();

    //GUI SLIDER
    gui = createGui('“ wait for sound ♪ ... then move the mouse ”'); //empty text p5 gui

    //GUI rotation
    sliderRange(10, 140, 1);
    gui.addGlobals('spin');

    //GUI cos
    sliderRange(0.5, 1, 0.1);
    gui.addGlobals('twist');

    //GUI opacity background
    sliderRange(0, 100, 1);
    gui.addGlobals('fade');

    //GUI volume
    sliderRange(0, 1, 0.5);
    gui.addGlobals('volume');
}

function loaded() {
    sound.play();
}

function draw() {
    background(0, 0, 0, fade);
    translate(width / 2, height / 2);

    sound.setVolume(volume);
    vol = amp.getLevel();

    size = map(vol, 0, 1, 2, 50);

    var r = n + distance * n / 10;
    var angle = n * spin;

    var x = r * cos(angle * twist); //other example: (angle/2)
    var y = r * sin(angle);

    opacityCol = map(n, 0, width / 2, 255, 0);

    //stroke(angle%255, 200, 0);  

    // if (shape <= 1) {

    if (mouseX < width / 2) {

        //stroke(0, 200, size * 15);
        //strokeWeight(size / 5);
        fill(0);
        stroke(0, 255, size * 15);
        strokeWeight(2);

        ellipse(x, y, size * n / 20);

        console.log(size);
    }

    // if (shape >= 2) {
    if (mouseX >= width / 2 && mouseX <= width) {
        // fill(size * 15, 0, size * 15, size * 20);
        fill(0);
        stroke(size * 20, 100, 50);
        push();
        rotate(n);
        rect(x, y, size * n / 20, size * n / 20);
        pop();
    }

    // when n is bigger than width, changes direction and comes back to the center
    //effects/results in the next statement
    if (n > width / 4) {
        switchDirection = true
    } else if (n <= 0) {
        switchDirection = false
    }
    //NEW STATEMENT
    if (n >= 0 && switchDirection == false) {
        // n = n + vol;
        n = n + 1;
    } else if (switchDirection == true) {
        // n = n - vol;
        n = n - 1;
    }

    //     if (n >= windowWidth / 3) {
    //         console.log('new canvas');
    //         n = 0;
    //     } else {
    //         console.log('actual canvas');
    //     }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}