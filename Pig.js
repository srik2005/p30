class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/cv.jpg");
    this.tinting = 255;
  }
display(){

console.log(this.body.speed);

//super.display();
if(this.body.speed<3){
  super.display();

}
else{
World.remove(world,this.body)
push();
this.tinting = this.tinting-5
tint(255,this.tinting)
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();

}

}
}

