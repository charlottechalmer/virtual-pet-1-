function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		model.addPet(p);
		return p;
	};

	this.playWithPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.play(amount);
          if (p.hunger >= 100) {
			alert("Game Over! Your pet " + p.name + " has died from starvation! :(");
			this.deadPet(p);
		}
		return p;
	};
	
	this.feedPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.play(amount);
		if (p.boredom >= 100) {
			alert("Game Over! Your pet " + p.name + " has died from boredom! :(");
			this.deadPet(p);
		}
		return p;
	};

	this.getAllPets = function() {
		return model.getAllPets();
	};

	this.deadPet = function(p) { 
		return model.deadPet(p);
	};

	this.decay = function() {
		model.decay();
	};
}
	

