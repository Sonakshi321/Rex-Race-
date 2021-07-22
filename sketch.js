var canvas, backgroundImage;
var gameState=0;
var pittie;
var gram;
var dia;
var truck;
var purse;
var bg,bg2;
var nxt;
var but;
var treats=0;
var ground1;
var treats1;
var toy;
var baddyGroup;
var mouse;

function preload(){
dia= loadAnimation("dial.png");
Dia2= loadAnimation("Dia2.png");
Dia3= loadAnimation("Dia3.png");
Dia4= loadAnimation("Dia4.png");
Ti=loadAnimation("title.png");
nxt= loadImage("nxt.png");
gramANI=loadAnimation("grammy.png");
gram=loadAnimation("gram.png");
pittie=loadAnimation("dog.png");
pittieANI=loadAnimation("doggy2.png","doggy5.png","doggy1.png","doggy4.png","doggy3.png");
baddy1=loadAnimation("bad man.png");
purse=loadAnimation("purse.png")
bg=loadImage("bg1.png");
road=loadImage("jbg.png");
trot=loadAnimation("treats1y.png");
trot1=loadAnimation("1r.png");
trot2=loadAnimation("2r.png");
trot3=loadAnimation("3r.png");
trot4=loadAnimation("4r.png");
trot5=loadAnimation("5r.png");
trot6=loadAnimation("6r.png");
Diar1=loadSound("Dia 1.m4a");
Diar2=loadSound("Dia 2.m4a");
Diar3=loadSound("Dia 3.m4a");
Diar4=loadSound("Dia 4.m4a");
bgM=loadSound("bg.m4a");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
/* Happy Commercial by MaxKoMusic | https://maxkomusic.com/
  Music promoted by https://www.chosic.com
  Creative Commons Attribution-ShareAlike 3.0 Unported
  https://creativecommons.org/licenses/by-sa/3.0/deed.en_US 
*/
   bg1 = createSprite(width/4,height/2,width,2);
   bg1.addImage(road);
   bg1.velocityX = 8;
   //bg1.x=width/4;
  bg1.scale=4.6;
   
  
 baddyGroup=new Group();
  
 
mouse=createSprite(50,50,mouseX,mouseY);
mouse.visible=false;

 gram1=createSprite(1400,400);
 gram1.addAnimation("grammy",gram);
 gram1.addAnimation("gram",gramANI);
 gram1.changeAnimation("grammmy");
 gram1.scale=2.7;
 
 purse1=createSprite(100,560);
 purse1.addAnimation("pur",purse);
 purse1.addAnimation("bad",baddy1);
 purse1.changeAnimation("pur",purse);
 purse1.scale=1;
 purse1.visible=false;

 nxt1=createSprite(1400,150);
 nxt1.addImage(nxt);
 nxt1.scale=0.3



treats1 = createSprite(1300,80,160,300);
treats1.addAnimation("Blank",trot);
treats1.changeAnimation("Blank");
treats1.addAnimation("1",trot1);
treats1.addAnimation("2",trot2);
treats1.addAnimation("3",trot3);
treats1.addAnimation("4",trot4);
treats1.addAnimation("5",trot5);
treats1.addAnimation("6",trot6);


treats1.scale=0.5
treats1.visible=true;





 pittie1=createSprite(100,460);
 pittie1.addAnimation("dog",pittie);
 pittie1.addAnimation("pittieA",pittieANI);
 pittie1.changeAnimation("dog");
 pittie1.velocityY=0;
 pittie1.scale=1.6;
 


 dia1=createSprite(700,200);
 dia1.addAnimation("dial",dia);
 dia1.changeAnimation("dial");
 dia1.addAnimation("dial2",Dia2);
 dia1.addAnimation("dial3",Dia3);
 dia1.addAnimation("dial4",Dia4);
 dia1.addAnimation("T",Ti);
 dia1.scale=0.9;
}

if(mouse.isTouching(nxt1)){

  gameState = 2;
  console.log(frameCount);
 

}

function draw(){
 
  background(0);
  
  if (gameState===0  ) 
  { 
    
    Diar1.pause();
    Diar2.pause();
    Diar3.pause();
    Diar4.pause();
   }

  if (!Diar1.isPlaying() && gameState===1  ) 
  { 
    Diar1.play(); Diar1.setVolume(0.1);
    Diar2.pause();
    Diar3.pause();
    Diar4.pause();
   }
   
  
  if (!Diar2.isPlaying()  && gameState===3 ) 
  { 
    Diar2.play(); Diar2.setVolume(0.1); 
    Diar1.pause();
    Diar3.pause();
    Diar4.pause();
  }
  
  if (!Diar3.isPlaying() && gameState===4 ) 
  { 
    Diar3.play(); Diar3.setVolume(0.1); 
    Diar2.pause();
    Diar1.pause();
    Diar4.pause();
  }
  
  if (!Diar4.isPlaying()  && gameState===5 ) 
  { Diar4.play(); Diar4.setVolume(0.1); 
    Diar2.pause();
    Diar3.pause();
    Diar1.pause();
  
  }
  
  if(frameCount % 200 === 0){
    gram1.changeAnimation("gram");
  }

  if(gameState===2){
    treats1.visible=true; 
  textSize(20);
  fill("white");
  text(treats,200,200);
  Diar1.pause();
  
  gram1.visible=false;
  dia1.visible=false;
  nxt1.destroy();
  


 
   
  pittie1.x=1200;
  pittie1.y=640
  pittie1.scale=2.4;
  pittie1.changeAnimation("pittieA");
 
  bg1.visible=true;
  
  spawnBaddies();

  
   
  
  treats1.visible=true;

console.log(frameCount);
  if (frameCount % 100 === 1){
  text( "Keep it up, Rex! PLUS 1 TREAT",700,200);
  treats1.changeAnimation("1");
  treats = treats+1;
  //baddyGroup.setVelocityXEach(13);
  
  
  
  }

  if (frameCount >= 300 ){
    text( "Way to go , Rex! PLUS 1 TREAT",700,200);
    treats1.changeAnimation("2");
    treats = treats+1;
    //baddyGroup.setVelocityXEach(15);
    
    }
  
  if (frameCount >=800  ){
      text( "Nice job , Rex! PLUS 1 TREAT",700,200);
      treats1.changeAnimation("3");
     // baddyGroup.setVelocityXEach(25);
      }

  if (frameCount >= 1400 ){
        text( "WOWIE, Rex! PLUS 1 TREAT",700,200);
        treats1.changeAnimation("4");
       // baddyGroup.setVelocityXEach=(25);
        treats = treats+1;


        }

        if (frameCount >= 1990){
          text( "WOWIE, Rex! PLUS 1 TREAT",700,200);
          treats1.changeAnimation("5");
         // baddyGroup.setVelocityXEach=(25);
          treats = treats+1;
  
  
          }

          if (frameCount >=2200 ){
            text( "WOWIE, Rex! PLUS 1 TREAT",700,200);
            treats1.changeAnimation("6");
           // baddyGroup.setVelocityXEach=(25);
            treats = treats+1;
    
    
            }

  if (frameCount % 300 === 1){
          text( "WOWIE, Rex! PLUS 1 TREAT",700,200);
          
          gameState=3;
         
          }
  


if(keyDown(UP_ARROW)) {
  
  pittie1.y=400;
}

pittie1.velocityY = pittie1.velocityY + 0.8

if(keyDown(DOWN_ARROW)) {
  
  pittie1.y=100;
}

pittie1.debug=false
;
pittie1.setCollider("rectangle",0,0,60,50);

if(keyWentUp("up")||keyWentUp("down")){
 pittie1.velocityY=0;
}

} 


if(baddyGroup.isTouching(pittie1)){
  gameState = 4;
}
if (gameState===2){
  //score = score + Math.round(getFrameRate()/100);
  //bg1.velocityX = -(6 + 3*score/100);

  //if(keyDown("space") && pittie1.y >= 159) {
  //  pittie1.velocityY = -12;
  //}

  //pittie1.velocityY = pittie1.velocityY + 0.8

}
if (keyCode===78){
//keycode N

  gameState = 1;
  console.log(frameCount);
 

}

if (keyCode===68){


  gameState = 2;
  console.log(frameCount);
 

}

if (bg1.x > 500 ){

  bg1.x = 450;
  
  console.log(bg1.x);
}
if(keyCode===13) {
  gameState = 0;
}
 
if(gameState===0){
  pittie1.x=100;
  pittie1.y=460;
  pittie1.scale=1.6
  bg1.visible=false;
  pittie1.changeAnimation("dog");
  baddyGroup.destroyEach();
  nxt1.visible=false;
  

  dia1.changeAnimation("T");
  dia1.visible=true;
  dia1.scale=2.3;
  gram1.visible=true;
  background(bg);
  
  purse1.visible=true;
  
 
}
 if(gameState===1){
  dia1.scale=0.9;
  nxt.visible=false;
  pittie1.x=100;
  pittie1.y=460;
  pittie1.scale=1.6
  bg1.visible=false;
  pittie1.changeAnimation("dog");
  baddyGroup.destroyEach();

  

  dia1.changeAnimation("dial");
  dia1.visible=true;
  gram1.visible=true;
  background(bg);
  
  purse1.visible=false;
  
 
}
 
if(gameState===3){
  purse1.x=1100;
  purse1.y=500;
  pittie1.scale=1.6;
  pittie1.x=1000;
  pittie1.y=490;
  dia1.changeAnimation("dial2");
  dia1.visible=true;
  bg1.visible=false;
  pittie1.changeAnimation("dog");
  baddy.visible=false;
  gram1.visible=true;
  background(bg);
  treats1.visible=true;
  treats1.changeAnimation("Blank");
  purse1.visible=true;
  
}

if(gameState===4){
  pittie1.x=900;
  pittie1.y=500;
  bg1.visible=false;
  pittie1.changeAnimation("dog");
  baddyGroup.visible=true;
  baddyGroup.setLifetimeEach(-1)
  baddyGroup.setVelocityXEach(0);
  dia1.changeAnimation("dial3");
  dia1.visible=true;
  gram1.visible=false;
  background(road);
  treats1.changeAnimation("Blank");
  purse1.visible=false;
  }

  if(keyCode===32) {
    gameState = 5;
  }


if(gameState===5){
  pittie1.x=900;
  pittie1.y=500;
  bg1.visible=false;
  pittie1.changeAnimation("dog");
  baddyGroup.visible=false;
  //baddyGroup.setLifetimeEach(-1)
  //baddyGroup.setVelocityXEach(0);
  dia1.changeAnimation("dial4");
  dia1.visible=true;
  gram1.visible=true;
  background(bg);
  treats1.changeAnimation("Blank");
  treats1.visible=true;
  //purse1.visible=true;
  
}




text(mouseX+","+mouseY,mouseX,mouseY);
drawSprites();

if(gameState===0){
  
  textSize(22);

text("Click n key to Continue",1180,50);
}

if(gameState===1){
  
  textSize(22);

text("Click D Key To Continue",1180,50);
}

if(gameState===2){
  
  textSize(15);
text("Hold Down Up Arrow Key To Jump",1180,130);
 
}

  
  if(gameState===4){
  
  textSize(20);
  text("Click Space Bar To Continue",1180,50);
   
  }

  if(gameState===5 || gameState===3){
  
    textSize(22);
    text("Click Enter  To Restart",1180,80);
     
    }
 


}


function spawnBaddies(){
  if (frameCount % 200 === 0) {
    baddy = createSprite(200, 690, 100, 100);
    baddy.addAnimation("bad",baddy1);
    baddy.velocityX = random(7,12);
    baddy.scale=0.65;
    baddy.lifetime=600;
    baddyGroup.add(baddy);
    baddy.debug=false;
    baddy.setCollider("rectangle",0,0,baddy.width-40,baddy.height-40);
    
  }

  

}