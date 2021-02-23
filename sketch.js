var cat,mouse
var catanimation_sitting,catanimation_standing
var mouse_enjoying,mouse_eating,mouse_inspecting
var bgimg


function preload() {
   bgimg = loadImage("garden.png")
   catanimation_sitting=loadImage("cat1.png")
   catanimation_standing=loadAnimation("cat4.png")
   catanimation_walking=loadAnimation("cat2.png","cat3.png")
   mouse_enjoying=loadAnimation("mouse2.png","mouse3.png")
   mouse_inspecting=loadAnimation("mouse4.png")
   mouse_eating=loadAnimation("mouse1.png")

}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(800,700,30,30)
   cat.addImage(catanimation_sitting)
   cat.scale=0.15

   mouse=createSprite(150,700,30,30)
   mouse.addAnimation("eating",mouse_eating)
   mouse.scale=0.15

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("standing",catanimation_standing)
        cat.x=220
        cat.changeAnimation("standing")
        
        mouse.addAnimation("inspecting",mouse_inspecting)
        mouse.changeAnimation("inspecting")
        
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode=== LEFT_ARROW){
        cat.velocityX=-5
        cat.addAnimation("walking",catanimation_walking)

        cat.changeAnimation("walking",catanimation_walking)
       mouse.frameDelay = 25;
        text(mouseX+','+mouseY,10,45)  

    }
}
