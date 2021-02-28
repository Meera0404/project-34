const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
bg           = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world  = engine.world;

  // create sprites here
  hero   = new Hero(0,0,10);
  fly    = new Fly(hero.body,{x:200,y:100});
  ground = new Ground(400,500,1200,10);


}

function draw() {
  background(bg);

  Engine.update(engine);

  hero.display();
  fly.display();
  ground.display();


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

