function Ship() {
	this.rotation = 0;
	this.position = createVector(850/2, 600/2);
	this.heading = random(360);
	this.radius = 15;
	this.velocity = createVector(0, 0);
	this.isMoving = false;

	this.moving = function(trueFalse) {
		this.isMoving = trueFalse;
	}

	this.update = function() {
		if (this.isMoving) {
			this.move();
		}
		this.position.add(this.velocity);
		this.velocity.mult(.98);
	}

	this.move = function() {
		var force = p5.Vector.fromAngle(this.heading);
		force.mult(0.2);
		this.velocity.add(force);
	}

	this.changeSides = function() {
		if (this.position.x > width + this.radius) {
			this.position.x = -this.radius
		}  else if (this.position.x < - this.radius) {
			this.position.x = width + this.radius;
		}  else if (this.position.y > height + this.radius) {
			this.position.y = -this.radius
		}  else if (this.position.y < - this.radius) {
			this.position.y = height + this.radius;
		}
	}

	this.render = function() {
		push();
		// image(shipImg, this.position.x, this.position.y, this.radius, this.radius);
		translate(this.position.x, this.position.y);
		stroke(0, 255, 255);
		fill(0);
		rotate(this.heading + PI/2);
		triangle(-this.radius, this.radius, this.radius, this.radius, 0, (-this.radius*1.5));
		pop();
	}


	this.setRotation = function(a) {
		this.rotation = a;
	}

	this.turn = function(angle) {
		this.heading += this.rotation;
	}

	this.hits = function(meteor) {
		var d = dist(this.position.x, this.position.y, (meteor.position.x + (meteor.radius/2)), (meteor.position.y + (meteor.radius/2)));
		if (d < (meteor.radius * .9)) {
			return true
		} else {
			return false;
		}
	}
}

function Laser(shipHead, angle) {
	this.position = createVector(shipHead.x, shipHead.y);
	this.velocity = p5.Vector.fromAngle(angle);
	this.velocity.mult(10);

	this.update = function() {
		this.position.add(this.velocity);
	}
	this.render = function() {
		push();
		strokeWeight(6);
		stroke(255, 0, 0);
		point(this.position.x, this.position.y);
		pop();
	}
	this.hits = function(meteor) {
		var d = dist(this.position.x, this.position.y, (meteor.position.x + (meteor.radius/2)), (meteor.position.y + (meteor.radius/2)));
		if (d < meteor.radius * .9) {
			return true;
		} else {
			return false;
		}
	}
}

