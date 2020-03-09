const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var world, engine;
var box;
var ground;
var boxes = [];



function setup(){
    createCanvas(400, 400)
    engine = Engine.create();
    world= engine.world;
    ground = new Ground(100,100,20,150,PI/4)

   ground1 = new Ground(200,100,20,150,-PI/4)
   
    
}




function draw(){
background(0);
Engine.update(engine)
for(var i=0;i<boxes.length;i++){
boxes[i].display();
ground.display();
ground1.display();

}
}


function mousePressed(){
    if(mouseY<350){
    boxes.push(new Box(mouseX,mouseY,20,20))
}
}