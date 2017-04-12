var EDGE_THICKNESS = 10;
var bricks;
var COLUMNS = 10 ;
var ROWS = 5;
var red, green, blue, topEdge, leftEdge, rightEdge, bottomEdge;
var BRICK_MARGIN = 25;
var BRICK_W = 50;
var BRICK_H = 20;
var MAX_SPEED = 12;
var lives = 3;
// SOUNDS
var boing;
var lose;
var brickSmash;
var winner;

// function preload() {
// 	boing = loadSound("../sound/boing_1.wav");
// 	lose = loadSound("../../sound/lose.wav");
// 	brickSmash = loadSound("../../sound/glass.wav");
// 	winner = loadSound("../../sound/winner.wav");
// }

$(".lives > h2").text(lives + " lives");

function setup() {
	createCanvas(windowWidth,windowHeight)
	// Draw Sprites and create board
	paddle = createSprite(width/2, height-30, 100, 10);
	paddle.immovable = true;
	paddle.shapeColor = color(200,255,255);

	topEdge = createSprite(width/2, -EDGE_THICKNESS/2, width+EDGE_THICKNESS*2, EDGE_THICKNESS);
	topEdge.immovable = true;

	leftEdge = createSprite(-EDGE_THICKNESS/2, height/2, EDGE_THICKNESS, height + EDGE_THICKNESS*2);
	leftEdge.immovable = true;

	rightEdge = createSprite(width + EDGE_THICKNESS/2, height/2, EDGE_THICKNESS, height);
	rightEdge.immovable = true

	bottomEdge = createSprite(width/2, height+EDGE_THICKNESS/2, width+ EDGE_THICKNESS*2, EDGE_THICKNESS);
	bottomEdge.immovable = true

	var offsetX = width/2-(COLUMNS-1)*(BRICK_MARGIN+BRICK_W)/2;  	
	var offsetY = 40;

	// Draw bricks
	bricks = new Group();
	for(var i = 0; i<ROWS; i++)
    	for(var j = 0; j<COLUMNS; j++) {
      		var brick = createSprite(offsetX+j*(BRICK_W+BRICK_MARGIN), offsetY+i*(BRICK_H+BRICK_MARGIN), BRICK_W, BRICK_H);
      		red = random(50, 255);
      		green = random(50, 255);
      		blue = random(50, 255);
      		brick.shapeColor = color(red,green,blue);
      		bricks.add(brick);
      		brick.immovable = true;
    }
    createBall();
}

function draw() {
	background(0);
	paddle.position.x = constrain(mouseX, paddle.width/2, width-paddle.width/2);
	ball.bounce(topEdge);
	ball.bounce(leftEdge);
	ball.bounce(rightEdge);
	// IMPLIMENT TO TEST
	// ball.bounce(bottomEdge);
	if(ball.bounce(bottomEdge)){
		ball.remove();
		lives--;
		createBall();
		$(".lives > h2").text(lives + " lives");
		if (lives == 1) {
			$(".lives > h2").text(lives + " life");
		}
		if(lives == 0) {
			ball.remove();
			// lose.play();
			$(".lives > h2").text("You're awful");
			noLoop();
			$(".start").show();
			$(".sub").hide();
			$(".reset").html("reset");
			$(".reset").css("display", "inline-block");
		}
	}
	if(ball.bounce(paddle)) {
		var change = (ball.position.x-paddle.position.x)/2;
		// boing.play();
		ball.setSpeed(MAX_SPEED, ball.getDirection() + change);
	}
	ball.bounce(bricks, brickHit);
	drawSprites();
}
//START BALL
function mousePressed() {
	if(lives > 0) {
  		if(ball.velocity.x == 0 && ball.velocity.y == 0) {
    		ball.setSpeed(MAX_SPEED, random(90-10, 90+10));
			$(".start").hide();
		} else if (ball.velocity.x != 0 && ball.velocity.y != 0) {
			ball.setSpeed(0);
		}
	}
}
// WIN/RemoveBrick
function brickHit(ball, brick) {
	// brickSmash.play();
	brick.remove();
	checkWin();
}
function checkWin() {
	if (bricks == "") {
		$(".lives > h2").text("Nice job?");
		// winner.play();
		ball.remove();
	};
}
// Create a Ball
function createBall() {
	ball = createSprite(width/2, height-150, 11, 11);
    ball.shapeColor = (255, 255, 255);
  	ball.maxSpeed = MAX_SPEED;
}

$(".reset").click(function(){
	location.reload();
})