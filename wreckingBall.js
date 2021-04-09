class Ball{

    constructor(x,y,r){

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r/2);


        World.add(world,this.body);

    }


    display(){

        var pos = this.body.position;
        
        push ()

        fill("grey");
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);

        pop ()

    }

}