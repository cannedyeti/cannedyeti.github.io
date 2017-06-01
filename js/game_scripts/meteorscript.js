var ship;
var meteors = [];
var img;
var lasers = [];
var score = 0;
var shipImg;
var laserImg;

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


function setup() {
	shipImg = loadImage("../img/pizza.svg");
	img = loadImage("../img/space.jpg");
	laserImg = loadImage("../img/pep.png");
	createCanvas(windowWidth,windowHeight)
	ship = new Ship(shipImg);
	meteor = new Meteor;
	for (var i = 0; i < 15; i++) {
		meteors.push(new Meteor());
	}
}
draw = function() {
	background(img);

	for (var i = 0; i < meteors.length; i++) {
		if (ship.hits(meteors[i])) {
			$(".startScreen").show();
			$("h3").css("color", "red");
			$(".startScreen > h3").text("You Lose! Try again?")
		}
		meteors[i].render();
		meteors[i].update();
		meteors[i].changeSides();
	}

	for (var i = lasers.length-1; i >= 0; i--) {
		lasers[i].render();
		lasers[i].update();
		for (var j = meteors.length-1; j >= 0; j--)
			if (lasers[i].hits(meteors[j])) {
				if (meteors[j].radius > 30) {
					var newMeteors = meteors[j].break();
					meteors = meteors.concat(newMeteors);
					meteors.splice(j, 1);
					lasers.splice(i, 1);
					score++;
					$(".score").text(score * 100)
					break;
				} else {
					meteors.splice(j, 1);
					score++;
					$(".score").text(score * 100)
					checkWin();
				}
		}
	}
	ship.render();
	ship.turn();
	ship.update();
	ship.changeSides();
}

function checkWin() {
	if (meteors.length === 0) {
		console.log('suck it')
		noLoop();
		$(".startScreen > h1").text("YOU WON! Play again?")
		$(".startScreen").show();
	}
}

keyReleased = function() {
	if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
		ship.setRotation(0);
	} else if(keyCode == UP_ARROW) {
		ship.moving(false);
	}
}

keyPressed = function() {
	if (keyCode == 32) {
		lasers.push(new Laser(ship.position, ship.heading));
	} else if (keyCode == RIGHT_ARROW) {
		ship.setRotation(0.1);
	} else if (keyCode == LEFT_ARROW) {
		ship.setRotation(-0.1);
	} else if (keyCode == UP_ARROW) {
		ship.moving(true);
	}
}

$(function() {
	$(".start").click(function() {
		$(".startScreen").hide();
		meteors = [];
		lasers = [];
		score = 0;
		$(".score").text(score)
		setup();
		redraw();
		loop();

	})
	$(".score").text(score)
});