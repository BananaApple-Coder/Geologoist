const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, ball;


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball = new Rubber(300, 600, 100);
}

function draw(){
    //background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ball.display();
}