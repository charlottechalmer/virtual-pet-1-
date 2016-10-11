function Pet(name) {
	this.name = name;
	this.hunger = 50;
	this.boredom = 0;
	this.type = randomPet();

	this.feed = function(food) {
		this.hunger -= food;
		this.boredom +=  food;
	};

	this.play = function(boredom) {
		this.boredom -= boredom;
		this.hunger +=  boredom;

	};

	function randomPet() {
    var pets = ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🐌", "🐞", "🐜", "🕷", "🦂", "🦀", "🐍", "🐢", "🐠", "🐟", "🐡", "🐬", "🐳", "🐋", "🐊", "🐆", "🐅", "🐃", "🐂", "🐄", "🐪", "🐫", "🐘", "🐐", "🐏", "🐑", "🐎", "🐖", "🐀", "🐁", "🐓", "🦃", "🕊", "🐕", "🐩", "🐈", "🐇", "🐿", "🐉", "🐲"];

    return pets[Math.floor(Math.random() * pets.length)];
}
}
