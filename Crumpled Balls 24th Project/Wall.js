class Wall{
    constructor(x,y,width,height){
    
     var options={
       isStatic:true
     }
      this.image=loadImage("dustbin.png")
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      World.add(world,this.body)
    }
 display(){
   push();
   translate(this.body.position.x,this.body.position.y);
   imageMode(CENTER)
   image(this.image,200,400,this.width,this.height)
   fill("green")
   rect(0,0,this.width,this.height)
   pop();
 }
 }