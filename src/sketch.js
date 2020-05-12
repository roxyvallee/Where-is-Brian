/*
let distX;
let distY;
let beginX;
let beginY;
let endX = 570.0;
let endY =  320.0;
let pct = 0.0;
let exponent = 4;
let step = 0.01;
let x = 0.0;
let y = 0.0;
let boolean = 0;

function setup() {
  // put setup code here
  createCanvas(1000, 700);
  
  button = createButton('terminal 1');
  button.position(20, 20);
  beginX = 20;
  beginY = 20;
  distX = endX - beginX;
  distY = endY - beginY;
  if(button.mousePressed())
  {
    boolean = 1
  }
  //button.mousePressed();
}


function draw()
{
  if(boolean == 1)
  {
    fill(0, 2);
    rect(0, 0, width, height);
    pct += step;
    if (pct < 1.0) {
      x = beginX + pct * distX;
      y = beginY + pow(pct, exponent) * distY;
    }
    fill(255);
    ellipse(x, y, 20, 20);
  }

}
/*
function draw() {
  // put drawing code here
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}*/

/*
let numSegments = 5,
  x = [],
  y = [],
  angle = [],
  segLength = 26,
  targetX,
  targetY,
  ballX = 50,
  ballY = 50,
  ballXDirection = 1,
  ballYDirection = -1;

for (let i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

function setup() {
  createCanvas(710, 400);
  strokeWeight(20);
  stroke(255, 100);
  noFill();

  x[x.length - 1] = width / 2; // Set base x-coordinate
  y[x.length - 1] = height; // Set base y-coordinate
}

function draw() {
  background(0);

  strokeWeight(20);
  //ballX = ballX + 1.0 * ballXDirection;
  //ballY = ballY + 0.8 * ballYDirection;
  if (ballX > width - 25 || ballX < 25) {
    ballXDirection *= -1;
  }
  if (ballY > height - 25 || ballY < 25) {
    ballYDirection *= -1;
  }
  ellipse(ballX, ballY, 30, 30);

  reachSegment(0, ballX, ballY);
  
  
  for (let i = 1; i < numSegments; i++) {
    reachSegment(i, x[i], y[i]);
  }
  

  for (let j = x.length - 1; j >= 1; j--) {
    positionSegment(j, j - 1);
  }
  
  dragSegment(j, mouseX, mouseY);

  for (let k = 0; k < x.length; k++) {
    segment(x[k], y[k], angle[k], (k + 1) * 2);
  }
  
}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}



function reachSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  angle = atan2(dy, dx);
  targetX = xin - cos(angle) * segLength;
  targetY = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  //strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

*/
const arrowLength = 40
let target

function setup() {
  createCanvas(400, 400)
  // --------------------------
  // ON DECLARE VERS QUEL POINT ON DOIT POINTER
  // --------------------------
  target = createVector(200, 300)
  img = loadImage('assets/aéroport.png'); // Load the image
}

function draw() {
  background(0)
  image(img, 0,0);
  // dessine le point cible
  noStroke()
  fill(255, 0, 0)
  ellipse(target.x, target.y, 15, 15)
  // Calcule la direction entre la souris et la cible
  const mouse = createVector(mouseX, mouseY)
  const dir = p5.Vector.sub(target, mouse).normalize()
  const arrowEnd = p5.Vector.add(mouse, p5.Vector.mult(dir, arrowLength))
  // Dessine un trait
  stroke(255)
  strokeWeight(15)
  line(mouseX, mouseY, arrowEnd.x, arrowEnd.y)
}