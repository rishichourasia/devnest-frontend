const cards = document.querySelectorAll(".memory-card");

let hasFlippedCards = false;
let firstCard, secondCard;
let board = false;

function flipCard() {
	if (board) return;
	if (this === firstCard) return;
	this.classList.add("flip");

	if (!hasFlippedCards) {
		hasFlippedCards = true;
		firstCard = this;
		return;
	}
	hasFlippedCards = false;
	secondCard = this;
	ismatch();
}
//flipped cards here
function ismatch() {
	let check = firstCard.dataset.value === secondCard.dataset.value;
	check ? disableCard() : unflipCards();
}
function disableCard() {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);
	resetBoard();
}

function unflipCards() {
	board = true;
	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");
		resetBoard();
	}, 1500);
}

function resetBoard() {
	[hasFlippedCards, board] = [false, false][(firstCard, secondCard)] = [
		null,
		null,
	];
}

(function shuffle() {
	cards.forEach((card) => {
		let random = Math.floor(Math.random() * 12);
		card.style.order = random;
	});
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
