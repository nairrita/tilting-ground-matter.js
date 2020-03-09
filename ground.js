class Ground{
    constructor(x,y,width,height,a){
        var options = {
            friction :0.3,
            restitution: 0.6,
            angle : a,
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        console.log(this.body)
        this.width=width;
        this.height = height;
        World.add(world,this.body)

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()

    }
}