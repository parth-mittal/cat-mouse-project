     var garden,gardenImg;
      var cat,mouse,catImg1,catImg2,catImg3,mouseImg1,mouseImg2;

function preload() {
    gardenImg=loadImage("garden.png");
   catImg1=loadAnimation("cat1.png");
    mouseImg1=loadAnimation("mouse1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    mouseImg2=loadAnimation("mouse4.png");
catImg3=loadAnimation("cat4.png")
}

function setup(){
    createCanvas(800,600);
    garden=createSprite(200,350,800,400)
    garden.addImage(gardenImg);
  
    cat=createSprite(300,300,50,50)
    cat.addAnimation("sittingCat",catImg1);
    cat.scale=0.1;
    cat.y=500;
    cat.x=500;

mouse=createSprite(300,300,30,30);
mouse.addAnimation("findingMouse",mouseImg2);
mouse.scale=0.1;
mouse.y=500;
mouse.x=100;
cat.debug=true;
mouse.debug=true;

}

function draw() {

    background(255);
    if(keyDown("LEFT_ARROW")){
        cat.velocityX=-5;
        cat.addAnimation("runningCat",catImg2);
        cat.changeAnimation("runningCat")
    }
       if(cat.x-mouse.x<30){
           cat.velocityX=0;
           cat.x=250;
    mouse.addAnimation("runningMouse",mouseImg1)
     mouse.changeAnimation("runningMouse")
     cat.addAnimation("standingCat",catImg3);
     cat.changeAnimation("standingCat");

}
    drawSprites();
}

