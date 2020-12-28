const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree,treeImg;
var ground;
var stone;
var mangoObject1,mangoObject2,mangoObject3,mangoObject4,mangoObject5;
var mangoObject6,mangoObject7,mangoObject8,mangoObject9,mangoObject10;
var string;

function setup() 
{
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,480,1000,20);
  
  tree = new Tree(1500,500,0,0);

  stoneObject = new Stone(150,350,80);

  boy = new Boy(1500,500,1000,20);

  mangoObject1 = new Mango(755,255,50);

  mangoObject2 = new Mango(855,225,50);

  mangoObject3 = new Mango(900,175,50);

  mangoObject4 = new Mango(950,250,50);

  mangoObject5 = new Mango(810,180,50);

  mangoObject6 = new Mango(700,220,50);

  mangoObject7 = new Mango(780,130,50);

  mangoObject8 = new Mango(870,110,50);

  mangoObject9 = new Mango(950,180,50);

  string = new Chain(stoneObject.body,{x:258,y:350});

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");

  ground.display();
  tree.display();
  stoneObject.display();
  boy.display();

  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  mangoObject6.display();
  mangoObject7.display();
  mangoObject8.display();
  mangoObject9.display();
  
  string.display();

 
  detectcollision(stoneObject,mangoObject1);
  detectcollision(stoneObject,mangoObject2);
  detectcollision(stoneObject,mangoObject3);
  detectcollision(stoneObject,mangoObject4);
  detectcollision(stoneObject,mangoObject5);
  detectcollision(stoneObject,mangoObject6);
  detectcollision(stoneObject,mangoObject7);
  detectcollision(stoneObject,mangoObject8);
  detectcollision(stoneObject,mangoObject9);
  
  drawSprites();

  text("Press SPACE for another Chance to PLAY!!",200,50);
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stoneObject.body, {x:mouseX,y:mouseY});
}

function mouseReleased()
{
    string.fly();
}

function detectcollision(stone,mango)
{
  mangoObjectPosition=mango.body.position
  stoneObjectPosition=stone.body.position

  var distance=dist(stoneObjectPosition.x,stoneObjectPosition.y,mangoObjectPosition.x,mangoObjectPosition.y);

  if(distance<=mango.r+stone.r)
  {
    Matter.Body.setStatic(mango.body,false);
  }
} 

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stoneObject.body,{x:258,y:350});
    string = new Chain(stoneObject.body,{x:258,y:350});
  }
}


