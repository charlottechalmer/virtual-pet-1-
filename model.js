function Model() {
	var pets = [];

	this.addPet = function(newPet) {
		pets.push(newPet);
	}

	this.getPetByName = function(name) {
		for(var pet of pets) {
			if (pet.name === name) {
				return pet;
			}
		}
		return null;
	}

	this.getAllPets = function() {
		return pets.slice();
	}

	this.deadPet = function(p){	
    	var deadPetIndex = pets.indexOf(p);
      		pets.splice(deadPetIndex, 1);
      			return pets;
    }
    this.decay = function() {	
			for (var i of pets) {
				i.hunger += 10;
				i.boredom +=  15;
			}
	}
}

