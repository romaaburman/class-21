var fixedrect
var movingrect
var bts
var ateez

function setup() {
  createCanvas(1600,800);
  movingrect = createSprite(400, 200, 50, 50);
  fixedrect = createSprite(600, 200, 50, 50);
  movingrect.shapeColor = "blue";
  fixedrect.shapeColor = "blue"

  bts = createSprite(300, 700, 40, 70)
  ateez = createSprite(500, 300, 40, 70)
  bts.shapeColor = "blue";
  ateez.shapeColor = "blue"

}

function draw() {
  background(255,255,255);  
  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY


  if(isTouching(movingrect, ateez)){
    movingrect.shapeColor = "purple";
    ateez.shapeColor = "purple"
  }
  
  else{
    movingrect.shapeColor = "blue";
    ateez.shapeColor = "blue"
  }
  
  
  
  drawSprites();

  
}

