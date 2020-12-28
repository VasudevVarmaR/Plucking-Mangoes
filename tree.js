class Tree
{
   constructor(x,y,width,height)
   {
      var options=
      {
          isStatic:true
      } 

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("tree.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
   }

   display()
   {
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,830,280,350,400);
    rect(pos.x, pos.y, this.width, this.height);
   }
}