
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.5,
		density:1.2,
		friction:0
	}
	ball=Bodies.circle(100, 100,20, ball_options)
	World.add(world, ball);

	var groun_options={
		isStatic:true
	}
	ground=Bodies.rectangle(700, height, 1400, 10, groun_options);
    World.add(world, ground);
	box1=Bodies.rectangle(1000,650,20,120,groun_options);
	World.add(world,box1);
	box2=Bodies.rectangle(1250,650,20,120,groun_options);
	World.add(world,box2);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1400, 10);
  rect(box1.position.x,box1.position.y,20,120);
  rect(box2.position.x,box2.position.y,20,120);
  
 // drawSprites();
 
}
function keyPressed(){
	if(keyCode===38){
		Matter.Body.applyForce(ball,ball.position,{
			x:75,y:-145
		})
	
}
}


