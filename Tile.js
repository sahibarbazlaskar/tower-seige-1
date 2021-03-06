class Tile{
    constructor(bodyA,pointB){
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          lenght:10,
      }
    
      this.pointB = pointB;
      this.body = Constraint.create(options);
      World.add(world,this.body);
    }
    release(){
        this.body.bodyA = null;
    }
    display(){
       if(this.body.bodyA){
          var pointA = this.body.bodyA.position;
          var pointB = this.pointB;
          stokeWeight(1);
          stroke("grey");
          line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
    }
}