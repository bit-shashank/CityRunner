class Background {
	constructor(backImg) {
		this.startX = 0;
		this.scroll = 2.3;
		this.backImg = backImg;
	}

	show() {
		image(this.backImg, this.startX, 0, this.backImg.width, height);
		image(this.backImg, this.startX + this.backImg.width, 0, this.backImg.width, height);
		this.startX -= this.scroll;
		if (this.startX < -this.backImg.width) {
			this.startX = 0;
		}
	}
}
