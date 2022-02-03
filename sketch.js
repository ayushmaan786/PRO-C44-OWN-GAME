var plane 
var ground, invisibleGround, groundImage;
var obstaclesGroup;

function preload()
{
  
  groundImage = loadImage("bgImage.jpg");
}
function setup() {
  createCanvas(1400,500);
  ground = createSprite(width/2,height/2,2*width,height);
  ground.scale = 1.5
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -3
  obstaclesGroup = new Group()
   
  
  plane = createSprite(50, 250, 50, 50);

}

function draw() {
  background("yellow"); 
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
 spawnObstacles()
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(1250,random(50,height-50) ,10,40);
    obstacle.velocityX = -3;
    
    //generate random obstacles
    /*var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }*/
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 500;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
