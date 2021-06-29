var sea,seaImg;
var ship1;
function preload(){
seaImg = loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  sea=createSprite(200,70);
 sea.addImage("sea",seaImg);
 
 
  ship1=createSprite(200,150,10,10);
 
 
 
  ship1.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

ship1.scale = 0.3;
}






function draw() {
 background("white");
 
 sea.velocityX = 2;
 
 
 
 
 
 
 
 
  if(sea.x < 0) {
sea.x = sea.width/2;
 }
drawSprites();

}