//create the ball, playerPaddle and computerPaddle as sprite objects
var ball = createSprite(200,200,10,10);
var playerPaddle = createSprite(350,200,10,70);
var computerPaddle = createSprite(50,200,10,70);
var goal = createSprite(375,200,10,50);
var goal1 = createSprite(25,200,10,50);
//variable to store different state of game
var gameState = "serve";
var wall1 = createSprite(400,0,800,20) 
var wall2 = createSprite(400,400,800,20)
var wall3 = createSprite(0,200,20,800)
var wall4 = createSprite(400,200,20,800)
//variables to keep the s,core
var compScore = 0;
fill("yellow");
var playerScore = 0;


function draw() {
  //clear the screen
  background("black");
  
  
ball.bounceOff(wall4 || wall3)
  
  //place info text in the center
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
   
  //display scores
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.y = ball.y;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }

  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  if(ball.isTouching(topEdge)){
    
  }
  
  //serve the ball when space is pressed
  if (keyDown("space") &&  gameState === "serve") {
    
    serve();
    gameState = "play";
  }


 
  //reset the ball to the centre if it crosses the screen
  if(ball.isTouching(goal)) {
   
    if(ball.isTouching(goal)) {
      compScore = compScore + 1;
      
    }
    
    reset();
    gameState = "serve";
  }
  
  if (playerScore === 5 || compScore === 1){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  drawSprites();
}

function serve() {
  ball.velocityX = 5;
  ball.velocityY = 5;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}
