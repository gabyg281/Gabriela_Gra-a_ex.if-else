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

  fill(circleColor);
  stroke(255);
  strokeWeight(3);

  circle(circleX, circleY, circleSize);
}

function mousePressed() {

  // Verifica se clicaste dentro do círculo
  if (dist(mouseX, mouseY, circleX, circleY) < circleSize / 2) {

    // Muda a posição para um local aleatório
    circleX = random(circleSize / 2, width - circleSize / 2);
    circleY = random(circleSize / 2, height - circleSize / 2);

    // Verifica em que metade do ecrã clicaste
    if (mouseX < width / 2) {
      circleColor = color(255, 0, 0);
    } else {
      circleColor = color(0, 100, 255);
    }

  }
}