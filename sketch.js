const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, ball, stoneObj, ironObj;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball = new Rubber(600, 300, 100);
    stoneObj = new stone(900, 500, 100, 203);
    ironObj = new iron(300, 200, 120, 50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ball.display();
    stoneObj.display()
    ironObj.display()
}