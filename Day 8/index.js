let bookedSeatsElement = document.querySelector(`.booking_seats`);
let remainingSeatsElement = document.querySelector(`.remaining_seats`);
let seats = document.querySelectorAll(`.seats`);

let bookedSeats = 0;
let reaminingSeats = seats.length;

bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = reaminingSeats;

seats.forEach((seat) => {
	seat.addEventListener(`click`, () => {
		// console.log(`you clicked`);
		seat.classList.toggle(`booked`);
		seat.classList.contains(`booked`) ? unBookSeats(1) : unBookSeats(-1);
	});
});

const unBookSeats = () => {
	bookedSeats += 1;
	reaminingSeats -= 1;

	bookedSeatsElement.innerText = bookedSeats;
	remainingSeatsElement.innerText = reaminingSeats;
};
