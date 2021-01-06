var Ground, paper, w1, w2, w3;
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, body;
var DustbinImg;

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  Ground = new Box1(width / 2, height - 10, width + 100, 20);
  paper = new Paper(100, 200, 23);
  w1 = new Dustbin(width / 2 + 220, 540, 20, 150);
  w2 = new Dustbin(width / 2 + 380, 540, 20, 150);
  w3 = new Dustbin(width / 2 + 300, 570, 150, 20);

  DustbinImg = loadImage("dustbingreen.png");
  Engine.run(engine);
}

function draw() {
  background(100, 200, 387);

  Engine.update(engine);
  paper.display();

  w3.display();
  w1.display();
  w2.display();

  imageMode(CENTER);
  image(DustbinImg, w3.body.position.x, w3.body.position.y - 80, 250, 200);

  Ground.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 100,
      y: -140,
    });
  }
}

function Refresh() {
  console.log("refresh");
}
