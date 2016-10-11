function View(controller) {

	this.createPetHTML = function(pet) {
		var $buttonPlay = $("<button>Play! to make less bored!</button>");
        var $playQty = $("<input id=\"playQty\" type=\"text\"></input>");
		var $buttonFeed = $("<button>Feed! to make less hungry!</button>");
		var $foodQty = $("<input id=\"foodQty\" type=\"text\"></input>");

		$buttonPlay.click(function() {
			var quantity = parseInt($playQty.val());
            if (!quantity) {
                controller.playWithPet(pet.name, 10);
            } else {
                controller.playWithPet(pet.name, quantity);
            }
            this.showAllPets();
        }.bind(this));


		$buttonFeed.click(function() {
			var quantity = parseInt($foodQty.val());
            if (!quantity) {
                controller.feedPet(pet.name, -10);
            } else {
                controller.feedPet(pet.name, (quantity* (-1)));
            }
            this.showAllPets();
		}.bind(this));
		
		
		var $pet = $("<div></div>");
		var $name = $("<h2 id=\"petName\">" + pet.name + "</h2><span id=\"petType\"><p><strong> Pet Type: </strong></p>" + pet.type + "</span>");
		var $hunger = $("<p> <strong>Hunger Level:</strong> " + pet.hunger + "</p>");
		var $boredom = $("<p> <strong>Boredom Level:</strong> " + pet.boredom + "</p>");

		$($name).css({
			fontWeight: "bold",
		});
		$($boredom).css({
			textIndent: "20px"
		});
		$($hunger).css({
			textIndent: "20px"
		});
		$($pet).css({
		    float: "left",
		    width: "30%",
		    padding: "4px",
		    border: "1px solid navy",
		    backgroundColor: "lightyellow",
		    textAlign: "center"
		});


		$hunger.append($buttonFeed);
		$hunger.append($foodQty);
		$boredom.append($buttonPlay);
		$boredom.append($playQty);

		$pet.append($name);
		$pet.append($hunger);
		$pet.append($boredom);

		return $pet;
	};

	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
		}
	};

	this.createPet = function() {
		var name = $('#petname').val();
		controller.addPet(name);
		$("#petname").val("");
		this.showAllPets();
	};

	this.updateHTML = function() {
		controller.decay();
		this.showAllPets();
	}


}
