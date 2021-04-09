const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box2,box3,box4,box5,box6,box7;
var boxes2,boxes3,boxes4,boxes5,boxes6,boxes7;
var b1,b2,b3,b4,b5;
var ball;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,780,1200,30);

    box1 = new Box(700,100,100,100);
    box2 = new Box(700,100,100,100);
    box3 = new Box(700,100,100,100);
    box4 = new Box(700,100,100,100);
    box5 = new Box(700,100,100,100);
    box6 = new Box(700,100,100,100);
    box7 = new Box(700,100,100,100);

    
    boxes2 = new Box(800,100,100,100);
    boxes3 = new Box(800,100,100,100);
    boxes4 = new Box(800,100,100,100);
    boxes5 = new Box(800,100,100,100);
    boxes6 = new Box(800,100,100,100);
    
   
     b2 = new Box(900,100,100,100);
     b3 = new Box(900,100,100,100);
     b4 = new Box(900,100,100,100);
     b5 = new Box(900,100,100,100);

     ball = new Ball(400,200,200);
     rope = new Rope(ball.body,{x:400,y:50});

   
}

function draw(){

   
    background("black");
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    boxes2.display(); 
    boxes3.display(); 
    boxes4.display(); 
    boxes5.display(); 
    boxes6.display(); 

    b2.display();
    b3.display();
    b4.display();
    b5.display();

    rope.display();
    ball.display();
    
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});


}
