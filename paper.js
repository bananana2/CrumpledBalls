class Paper{
 constructor(x,y,r){
     var options = {
         isStatic:false,
         resitution:0.3,
         friction:0,
         density:1.2
     }
     this.x=x;
     this.y=y;
     this.r=r
    this.image = loadImage("paper.png");
     this.body=Bodies.circle(x, y, r, options);
      World.add(world, this.body);

 }
 display()
 {
         
         var Pos=this.body.position;		
        var angle = this.body.angle;
         push()
         translate(Pos.x, Pos.y);
         rotate(angle);
         imageMode(CENTER)
         //strokeWeight(4);
         fill(128,128,128)
         image(this.image,0,0,this.r,this.r);
         pop()
         
 }

}