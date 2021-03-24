
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var anchor1,anchor2,anchor3,anchor4,anchor5;
var roofObject;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	anchor1 = new anchor();
	anchor2 = new anchor();
	anchor3 = new anchor();
	anchor4 = new anchor();
	anchor5 = new anchor();

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiametre*2,0);
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiametre*2,0);
	rope3=new rope(bobObject3.body,roofObject.body,-bobDiametre*2,0);
	rope4=new rope(bobObject4.body,roofObject.body,-bobDiametre*2,0);
	rope5=new rope(bobObject5.body,roofObject.body,-bobDiametre*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  drawSprites();
 
}



