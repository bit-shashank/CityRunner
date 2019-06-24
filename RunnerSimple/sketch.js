
let p;
let back;
let backImg;
let dogSprits=[];
let playerRun=[];
let playerJump=[];
let dogs=[];
let lastSpawn=0;
let totalAssets=59;
let loaded=0;
let score=0;
let start=false;
let end=false;
let restart;
function preload(){
    back=new Background(loadImage("Images/cityBack1.png"));
    for(var i=0;i<8;i++){
        dogSprits[i]=loadImage("Images/dog-sprit2/Run ("+(i+1)+")"+".png ");
    }
    
    for(var i=0;i<20;i++){
        playerRun[i]=loadImage("Images/cutegirlfiles/png/Run ("+(i+1)+").png");
    }
    
    for(var i=0;i<30;i++){
        playerJump[i]=loadImage("Images/cutegirlfiles/png/Jump ("+(i+1)+").png");
    }
    restart=loadImage("Images/restart.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    reset();
}  

function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
}

function draw() {
    background(51);
    if(start){
        if(random(1)<0.03){
            let current=millis();
            if(current-lastSpawn>=500){
                dogs.push(new Dog());
                lastSpawn=current;
            }
        }
       
        back.show();
        p.show();
        p.update();
        fill(255,0,0);
        rect(0,height-10,width,height);
        toRem=[];
          for(let d of dogs){
            d.show();
            d.move();
            if(p.hits(d)){
                textSize(50);
                fill(255,0,0);
                textAlign(CENTER);
                text("Game Over",width/2,height/2);
                textSize(20);
                fill(255,255,0);
                image(restart,width/2-30,height/2+30,60,60);
                start=false;
                noLoop();
            }
            if(d.x<-d.width){
                toRem.push(d);
                score++;
            }
        }
        dogs = dogs.filter( ( el ) => !toRem.includes( el ) );
        fill(255,255,255);
        textAlign(LEFT);
        textSize(30);
        textStyle(BOLD);
        text("Score:"+score,20,50);
    }
    else{
        back.show();
        p.show();
        p.update(); 
        fill(255,255,255);
        textAlign(CENTER);
        textSize(40);
        text("Tap to Start",width/2,height/2);
        
        textSize(20);
        text("Made by Shashank",width/2,30);
    }
}


function reset(){
    p=new Player();
    dogs=[];
}

function touchStarted(){
   interact();
    //console.log(touches);
}

function mousePressed(){
    interact();
    if(collidePointRect(mouseX,mouseY,width/2-30,height/2+30,60,60)){
       start=false;
        score=0;
        reset();
        loop();
    }
  
}
function keyPressed(){
   interact();
} 

function interact(){
    if(!start)
        start=true;
    p.jump();
}
