var fixedSprite1, fixedSprite2, fixedSprite3, fixedSprite4;
var movingSprite;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

   
    fixedSprite1=createSprite(100,580,180,30);
    fixedSprite1.shapeColor="skyblue";

    fixedSprite2=createSprite(300,580,180,30);
    fixedSprite2.shapeColor="pink";

    fixedSprite3=createSprite(500,580,180,30);
    fixedSprite3.shapeColor="blue";

    fixedSprite4=createSprite(700,580,180,30);
    fixedSprite4.shapeColor="purple";

    

}

function draw() {
    background(rgb(10,10,10));
   
    if(movingSprite.x<0){
      music.stop();
        movingSprite.velocityX=3;
    }else if(movingSprite.x>800){
      music.stop();
        movingSprite.velocityX=-3;
    }
   
  if(movingSprite.isTouching(fixedSprite4)){
    music.play()
    movingSprite.shapeColor="purple";
    movingSprite.bounceOff(fixedSprite4);
    
  }
  
  else if(movingSprite.isTouching(fixedSprite3)){
    music.stop();
    movingSprite.shapeColor="blue";
    movingSprite.bounceOff(fixedSprite3);
   
  }
    
  else if(movingSprite.isTouching(fixedSprite2)){
    music.stop();
    movingSprite.shapeColor="pink";
    movingSprite.bounceOff(fixedSprite2);
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
  }
  
  else if(movingSprite.isTouching(fixedSprite1)){
    music.stop();
    movingSprite.shapeColor="skyblue";
    movingSprite.bounceOff(fixedSprite1);
  }

  if (movingSprite.y<0){
    music.stop();
    movingSprite.velocityY=3;
  }

  
   
    drawSprites();
}