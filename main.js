$(document).ready(function(){

	var m = new Model();
	var c = new Controller(m);
	var v = new View(c);

	v.showAllPets();

	$('#newpet').click(function(){
		v.createPet();
	});

	setInterval(function() {
		v.updateHTML();
	}, 80000);

});