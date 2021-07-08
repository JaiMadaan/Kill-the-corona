var gunboy,gunboyImg;
var bullet,bulletImage,bulletGroup;
var backImage;
var monster,monsterImg,monsterGroup;
var score=0 
var music

function preload(){
  gunboyImg=loadImage("Mp.png")
  bulletImage=loadImage("ammoo.png")
  backImage=loadImage("back.jpg")
  monsterImg=loadImage("19.png")
  music=loadSound("checkPoint.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  gunboy = createSprite(width/2-400,height/2)
  gunboy.shapeColor="blue"
 gunboy.addImage("Gun Man",gunboyImg);
  gunboy.scale=0.2;
 /* gunboy.velocityX=20
  gunboy.velocityY=22*/

  bulletGroup=new Group( )
  monsterGroup=new Group( )


 }
function draw(){
  background(backImage)
 gunbooy.y=mouseY
  if (touches.length || keyDown("space")) {
    var temp_bullet = createBullet();
    temp_bullet.addImage(bulletImage);
     temp_bullet.y = gunboy.y;
  }
 

  if (bulletGroup.isTouching(monsterGroup)){  bulletGroup.destroyEach();
                                               monsterGroup.destroyEach();
  score=score+200   
                                            music.play();
 
   }
  
  if (monsterGroup.isTouching(gunboy)){  bulletGroup.destroyEach();
                                               monsterGroup.destroyEach();
  score=score-500                                 
 
   }

       monster() 
 
  
  edges=createEdgeSprites()
  gunboy.bounceOff(edges)
  //monster.bounceOff(edges)
  
  
drawSprites();
  fill("red")
textSize=20;
  text("Score: " + score,width/2,50);

}
function createBullet() {
  bullet= createSprite(65,300 );
  bullet.addImage(bulletImage)
  bullet.velocityX = 5;
  bullet.scale = 0.1 ;
  bullet.y=gunboy.y;
  bullet.x=gunboy.x;

 bulletGroup.add(bullet)

    return bullet;
}
function monster(){
  var monster = createSprite(width,Math.round(random(50,1200)),0,0);
  monster.addImage(monsterImg);
  monster.velocityX=-80 ;
  monster.lifetime=800;
monsterGroup.add(monster)

  monster.scale=0.08
}
