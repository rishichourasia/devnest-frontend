////Bind Method

var car = {
	registrationNumber: "GA12345",
	brand: "Toyota",

	displayDetails: function () {
		var gadi =
			" this is your car: " + this.registrationNumber + " " + this.brand;
		return gadi;
	},
};
//car display name
var carname = function (car1, car2) {
	console.log("Machine: " + this.gadi());
	console.log("cartype: " + car1 + " " + car2);
};

var logPersonName = carName.bind(car);
logPersonName("maruti", "gallardo");

////
