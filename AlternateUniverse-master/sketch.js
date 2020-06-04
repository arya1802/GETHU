var sun, robert,thomas;

function setup(){
  createCanvas(1365,625);

 
  sun = createSprite(650,300,75,75);
 
  robert = createSprite(650,150,50,50);
  thomas = createSprite(650,450,50,50);
  mike = createSprite(850,300,162.5,50,50);
  liya = createSprite(300,300,50,50);
  
  sun.shapeColor = "yellow";
  
  robert.shapeColor = "purple";
  thomas.shapeColor = "purple";
  mike.shapeColor = "purple";
  liya.shapeColor = "purple";

  sun.setCollider("circle",0,0,50);
}

function draw() {
  background("blue"); 
  
  if(World.frameCount%50 === 0){
    sun.width = sun.width +30;
    sun.height = sun.height +30;
  }

  if(collide(robert,sun)){
    robert.destroy();
  }

  if(collide(mike,sun)){
    mike.destroy();
  }
  if(collide(liya,sun)){
   liya.destroy();
  }

  if(collide(thomas,sun)){
    thomas.destroy();
  }
  

 
  drawSprites();
}

function collide(object1,object2){ 
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2){ 
    return true;
  }
  else { 
    return false;
  }
}