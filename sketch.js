const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld
var ground
var ball

function setup() {
  createCanvas(400,400);

var option={
  isStatic:true
}

var ballop={
  restitution:3
}
myengine=Engine.create();
myworld=myengine.world;
ground=Bodies.rectangle(200,390,400,10,option)
World.add(myworld,ground);
console.log(ground.position.y);
   
ball=Bodies.circle(200,50,20,ballop)
World.add(myworld,ball);

}

function draw() {
  background("pink"); 
  Engine.update(myengine)
  fill("brown")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)






}