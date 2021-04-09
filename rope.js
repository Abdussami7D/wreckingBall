class Rope {

constructor(bodyA,pointB){

var option = {

bodyA : bodyA,
pointB : pointB,
stiffness : 1.0,
length : 500

}

this.rope = Constraint.create(option);
this.pointB = pointB

World.add(world,this.rope);

}

display(){

var pointA = this.rope.bodyA.position;
var pointB = this.pointB;

push ()
strokeWeight(10);
stroke("white");
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop()

}




}