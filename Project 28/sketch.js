
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy

function preload()
{
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(500,486,400,400)
	ground= new Ground(400,687,800,20)
	boy= new Boy(100,600,300,300)
	mango= new Mango(400,400,50)
	mango2= new Mango(600,400,50)
	mango3= new Mango(500,345,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 tree.display();
 ground.display();
 boy.display();
 mango.display();
 mango2.display();
 mango3.display();
}



