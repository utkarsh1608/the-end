var car1,car2,car3,car4;
var car1_img,car2_img,car3_img,car4_img,tr,bg;

function preload(){
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  tr = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);

  car1 = createSprite(350,600);
  car1.addImage(car1_img);
  car2 = createSprite(550,600);
  car2.addImage(car2_img);
  car3 = createSprite(750,600);
  car3.addImage(car3_img);
  car4 = createSprite(950,600);
  car4.addImage(car4_img);

  image(tr,0,-displayHeight,displayWidth,displayHeight);

}
function draw(){
  background(ground);
  image(tr,0,-displayHeight*4,displayWidth,displayHeight*5);

  if(keyWentDown(UP_ARROW))
  {
    car4.velocity.y = -12;
  }

  if(keyWentUp(UP_ARROW))
  {
    car4.velocity.y = -0;
  }
  
  car1.velocity.y = -11:
  car2.velocity.y = -10;
  car3.velocity.y = -08;


  camera.position.x = displayWidth/2;
  camera.position.y = car4.position.y;

  drawSprites();
}