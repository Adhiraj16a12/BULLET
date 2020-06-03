

  
  var engine, world;
  var bullet,wall;
  var speed,weight,thickness;

  function setup(){
      var canvas = createCanvas(1200,400);
    thickness = random(22,83)
    speed = random(100,130)
    weight = random(30,52)
  wall = createSprite(1200,200,thickness,height/2)
    bullet = createSprite(200,200,20,50)
    bullet.shapeColor=color("white")
    bullet.velocityX = speed;
  }
  
  
  function draw(){
   background(0);

   if(hasCollided(bullet,wall)){

  bullet.velocityX = 0;
  var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness)
 console.log(damage)
  if(damage>10){
wall.shapeColor = color(255,0,0)

  }
  if(damage<10){
wall.shapeColor = color(0,255,0)
  }
  }

  drawSprites();
  }
function hasCollided(Lbullet , Lwall){

  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge  = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}