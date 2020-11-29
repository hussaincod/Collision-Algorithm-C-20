var movingRect
var fixedRect




function setup() {

  createCanvas(1200,800);
  movingRect=createSprite(600, 400, 50, 80);
  fixedRect=createSprite(700, 400, 50, 80);
}

function draw() {
  background(255,255,255);
  
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){

   movingRect.shapeColor="red"
   fixedRect.shapeColor="red"
  }
  else{

  

  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"}
  

  movingRect.y=mouseY
  movingRect.x=mouseX

  drawSprites();
}