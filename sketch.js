var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 70, 70);
  fixedRect.shapeColor = "white";
  movingRect=createSprite(700,200,70,110);
  movingRect.shapeColor = "white";

  movingRect.velocityX=-4;
  fixedRect.velocityX=4;

  
}

function draw() {
  background("black");  

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x- movingRect.x < movingRect.width/2+fixedRect.width/2){
      movingRect.velocityX=4;
      fixedRect.velocityX= -4;
  }
 

  drawSprites();

}