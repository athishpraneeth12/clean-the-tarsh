class cb {

    constructor (x,y,r,angle){
     
        var options  = {
    
            isStatic :false,
        'restitution' : 0.3,
        'friction'    : 0,
        'density'     : 1.2
    }
    
    
    
    this.radius = r
    this.body = Bodies.circle(x,y,r,options);
    
    this.image = loadImage("paper.png");
    World.add(world,this.body);
    
    
    
    }
    
    
    display(){
    
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
      }
    
    }
    
    
    
    
    
    
    
    
    