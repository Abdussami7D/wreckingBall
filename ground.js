class Ground{

    constructor(x,y,w,h){

        var option = {

            isStatic : true
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,option)


        World.add(world,this.body)

    }


    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push ()
        fill("brown")
        translate(pos.x,pos.y);
        rotate (angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h);

        pop ()

    }

}