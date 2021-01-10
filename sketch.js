var playArea , PAImage;
var cat , catImage , catImage2 , catImage3 ;
var mouse , mouseImage , mouseImage2 , mouseImage3;
var dx = 15; 
function preload() {
    //load the images here
    PAImage = loadImage('/images/garden.png')

    mouseImage = loadAnimation('/images/jerryOne.png')
    mouseImage2 = loadAnimation('/images/jerryTwo.png','/images/jerryThree.png')
    mouseImage3 = loadAnimation('/images/jerryFour.png')

    catImage = loadAnimation('/images/tomOne.png')
    catImage2 = loadAnimation('/images/tomTwo.png','/images/tomThree.png')
    catImage3 = loadAnimation('/images/tomFour.png')


}

function setup(){
    createCanvas(700,500);
    //create tom and jerry sprites here
    playArea = createSprite(350,250,20,20)
    playArea.addImage(PAImage)
    playArea.scale = 0.75;

    mouse = createSprite(120,410,20,20)
    mouse.addAnimation('mouse_stand',mouseImage)
    mouse.addAnimation('mouse_mischief',mouseImage2)
    mouse.addAnimation('mouse_end',mouseImage3)
    mouse.scale = 0.11

    cat = createSprite(550,420,20,20)
    cat.addAnimation('cat_sit',catImage);
    cat.addAnimation('cat_walk',catImage2);
    cat.addAnimation('cat_end',catImage3)
    cat.scale = 0.15;
    



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (mouse.x-mouse.width/2 >= cat.x-cat.width/2) {
       mouse.changeAnimation('mouse_end',mouseImage3) 
       cat.changeAnimation('cat_end',catImage3)
       cat.x = 200

       

    
    }

    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if (keyWentDown(LEFT_ARROW)) {
      cat.x = cat.x - dx
      cat.changeAnimation('cat_walk',catImage2)
      mouse.changeAnimation('mouse_mischief',mouseImage2)
      
  }


}
