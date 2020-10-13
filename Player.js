/*
    This is the player class ,encapsulates stuff related to the Girl(Player)
*/
class Player {
	/*
        x: x-coordinte of top left corner of the player
        y: y- coordinate of top left corener of the player
        r: size of the player
        g: gravity
        ind: index variable used to traverse in playerRun array
    */
	constructor() {
		this.x = 10;
		this.y = height - 100;
		this.r = 100;
		this.vy = 0;
		this.g = 2;
		this.jumping = false;
		this.speed = 1;
		this.ind = 0;
	}
	//this methd is used to show the player
	show() {
		noFill();
		//rect(this.x+10,this.y+5,this.r-20,this.r);
		//rect(this.x,this.y, this.r, this.r);
		if (!this.jumping) {
			// image(playerRun[frameCount%playerRun.length],this.x,this.y,this.r,this.r);
			image(playerRun[floor(this.ind) % playerRun.length], this.x, this.y, this.r, this.r);
		} else {
			image(playerJump[(frameCount + 3) % playerJump.length], this.x, this.y, this.r, this.r);
		}
	}

	jump() {
		if (this.y + this.r == height - 10) {
			this.vy = -30;
			this.jumping = true;
		}
	}

	update() {
		this.y += this.vy;
		this.vy += this.g;
		this.y = constrain(this.y, 0, height - this.r - 10);
		if (this.y + this.r == height - 10) {
			this.jumping = false;
		}
		this.ind += this.speed;
	}

	hits(dog) {
		//return collideRectRect(this.x,this.y, this.r, this.r, dog.x, dog.y, dog.width, dog.height );
		return collideRectRect(
			this.x + 10,
			this.y + 5,
			this.r - 25,
			this.r,
			dog.x,
			dog.y,
			dog.width,
			dog.height
		);
	}
}
