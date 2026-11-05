
let circleX;
let circleY;
let circleSize = 100;
let circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);

  circleX = width / 2;
  circleY = height / 2;

  circleColor = color(255, 0, 0);
}

function draw() {
  background(0);

  if (mouseX < width / 2) {
    strokeWeight(2);
  } else {
    strokeWeight(8);
  }

  fill(circleColor);
  stroke(255);

  circle(circleX, circleY, circleSize);
}

function mousePressed() {

  if (dist(mouseX, mouseY, circleX, circleY) < circleSize / 2) {

    circleX = random(circleSize / 2, width - circleSize / 2);
    circleY = random(circleSize / 2, height - circleSize / 2);

    circleColor = color(random(255), random(255), random(255));


  } else {
    
  }
}