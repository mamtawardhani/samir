//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var en, wo;
var box;
var ground

function setup(){
    var canvas = createCanvas(400,400);
    
    en = Engine.create()
    console.log(en)
    wo=en.world
    console.log(wo)

    box = Bodies.rectangle(200,200,50,50)
   // groupname.add()
   World.add(wo, box)

   var sat = {isStatic : true}
   ground=Bodies.rectangle(200,370,400,20, sat)
   World.add(wo,ground)
}

function draw(){
    background(0);
 Engine.update(en)
 rectMode(CENTER)
  rect(200,box.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
}

//circle = > ellipse()
//rectangle => rect()
//polygonal => vertex()