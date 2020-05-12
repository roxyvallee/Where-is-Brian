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
}



const arrowLength = 40
let target

function setup() {
  createCanvas(400, 400)
  // --------------------------
  // ON DECLARE VERS QUEL POINT ON DOIT POINTER
  // --------------------------
  target = createVector(200, 300)
  //
}

function draw() {
  background(0)
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

*/


const arrowW = 200
const arrowH = 100

let arrowImg
let target


function preload() {
	arrowImg = loadImage("assets/right-arrow.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  // --------------------------
  // ON DECLARE VERS QUEL POINT ON DOIT POINTER
  // --------------------------
  button1 = createButton('terminal 1')
  button2 = createButton('terminal 2')
  button1.position(20,20)
  button2.position(20,60)
  target = createVector(width*0.6, height*0.55)
  button1.mousePressed(positionTerminal1)
  button2.mousePressed(positionTerminal2)

}


function positionTerminal1()
{
  target.x = width*0.9
  target.y = height*0.2
}

function positionTerminal2()
{
  target.x = width*0.2
  target.y = height*0.9
}

function draw() {
  background(255)
  // dessine le point cible
  noStroke()
  fill(255, 0, 0)
  ellipse(target.x, target.y, 15, 15)

  // Calcule la direction entre la souris et la cible
  const mouse = createVector(mouseX, mouseY)
  const dir = p5.Vector.sub(target, mouse).normalize()
  const angle = dir.heading()
  
  if(mouseX == target.x & mouseY == target.y)
  {
    greeting = createElement('h2', 'Bien arrivé !');
    greeting.position(100, 60);
  }
  // Dessine l'image
	push()
		translate(mouseX, mouseY)
		rotate(angle)
		image(arrowImg, 0, -arrowH/2, arrowW/2, arrowH)
	pop()
}

