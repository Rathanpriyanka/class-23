const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground();
    box2 =  new Box(220,100,50,50,false);

    box1 = new Box(200,300,50,50,true);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box2.display();
    box1.display();
    
}