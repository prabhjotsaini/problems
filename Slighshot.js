class Slighshot {
    
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
   this.slighshot=Constraint.create(options)
   this.pointB=pointB;
   World.add(world,this.slighshot)


    }
    fly(){
     this.slighshot.bodyA=null;   
    }
    display(){
       
       if(this.slighshot.bodyA) {


       
        var pointA=this.slighshot.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
    }
}