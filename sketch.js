var player;
var edges;
var target;
var wormGroup;

function setup() {
  createCanvas(600,600);
   edges = createEdgeSprites();
  player=createSprite(40,550,30,30);
  target=createSprite(550,40,30,30);
  target.shapeColor = "orange";
  wormGroup = new Group();
  obs1 = createSprite(300,100,100,30);
  obs1.velocityX = -5;
   
  obs2 = createSprite(300,100,100,30);
  obs2.velocityX = +4;

  obs3 = createSprite(300,100,100,30);
  obs3.velocityX = -2;
   
  obs4= createSprite(300,300,100,30);
  obs4.velocityX = +5;

  obs5= createSprite(300,300,100,30);
  obs5.velocityX= +3;

  obs6= createSprite(300,300,100,30);
  obs6.velocityX= -3;

  obs7= createSprite(300,300,100,30);
  obs7.velocityY= -3;
   
  obs8= createSprite(300,300,100,30);
  obs8.velocityY= -5;

  


  obs1.shapeColor ="red";
  obs2.shapeColor ="red";
  obs3.shapeColor ="red";
  obs4.shapeColor ="red";
  obs5.shapeColor ="red";
  obs6.shapeColor ="red";
  obs7.shapeColor ="red";
  obs8.shapeColor ="red";
  
}

function draw() {
  background("skyblue");  
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
   
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  obs5.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]);
  obs6.bounceOff(edges[0]);
  obs6.bounceOff(edges[1]);
  obs7.bounceOff(edges[2]);
  obs7.bounceOff(edges[3]);
  obs8.bounceOff(edges[2]);
  obs8.bounceOff(edges[3]);
   
  wormGroup.bounceOff(edges[0]);
  wormGroup.bounceOff(edges[1]);
  wormGroup.bounceOff(edges[2]);
  wormGroup.bounceOff(edges[3]);
  

  if(keyDown("up")){
    player.y = player.y -3;
  }

  if (keyDown("down")){
    player.y = player.y +3;
  }
  if (keyDown("left")){
    player.x = player.x -3;
  }
  if (keyDown("right")){
    player.x = player.x +3;
  }

  if(player.isTouching(obs1)){
    obs1.velocityX = 0;
    text("YOU LOSE!",200,200);
  }
  
  if(player.isTouching(obs2)){
    obs2.velocityX = 0;
    text("YOU LOSE!",200,200);
  }
  if(player.isTouching(obs3)){
    obs3.velocityX = 0;
    text("YOU LOSE!",200,200);
  }
  if(player.isTouching(obs4)){
    obs4.velocityX = 0;
    text("YOU LOSE!",200,200);
  }
  if(player.isTouching(obs5)){
    obs5.velocityX = 0;
    text("YOU LOSE!",200,200);
  }
  if(player.isTouching(obs6)){
    obs6.velocityX = 0;
    text("YOU LOSE!",200,200);
  }
  if(player.isTouching(obs7)){
    obs7.velocityX = 0;
    text("YOU LOSE!",200,200);
  }
  if(player.isTouching(obs8)){
    obs8.velocityX = 0;
    text("YOU LOSE!",200,200);
  }
  if(player.isTouching(wormGroup)){
    wormGroup.velocityX = 0;
    text("YOU LOSE!",200,200);
  }

  
  
  
  if(player.isTouching(target)){
    text("YOU WIN!",200,200);
  }




  generateWorm();

for(i=0; i< (wormGroup).length;i++){
  var temp = (wormGroup).get(i);
  if (player.isTouching(temp)){
    player.x=40;
    player.y=550;
    
  }
}
  drawSprites();
}

function generateWorm(){

  if(frameCount % 30 ===0){
  
  
  var worm =createSprite(600,random(70,520),random(30,120),5);
 
  }
}