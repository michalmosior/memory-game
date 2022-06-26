const container = document.querySelector('.container');

const game = {
	cardsRight: '',
	activeCard: [],
	cardImages: [
		'../img/js.png',
		'../img/html.png',
		'../img/css.png',
		'../img/react.png',
		'../img/angular.png',
		'../img/vue.png',
		'../img/php.png',
		'../img/python.png',
		'../img/java.png',
		'../img/c.png',
		'../img/js.png',
		'../img/html.png',
		'../img/css.png',
		'../img/react.png',
		'../img/angular.png',
		'../img/vue.png',
		'../img/php.png',
		'../img/python.png',
		'../img/java.png',
		'../img/c.png',
	],
	createCards() {
		for (i = 0; i < 20; i++) {
			const card = document.createElement('div');
			const cardRight = document.createElement('div');
			const cardLeft = document.createElement('div');
			let index = Math.floor(Math.random() * 20);
			card.classList.add('card');
			cardRight.classList.add('card-right', 'opacity-one');
			cardLeft.classList.add('card-left', 'opacity-zero');
			cardLeft.style.backgroundImage = `url(${game.cardImages[i]})`;
			container.appendChild(card);
			card.append(cardRight, cardLeft);
		}
		this.cardsRight = document.querySelectorAll('.card-right');
		this.cardsRight.forEach((card) => {
			card.addEventListener('click', game.rotateCard);
		});
	},
	rotateCard(e) {
		if (game.activeCard.length < 2) {
			e.target.classList.add('opacity-zero');
			e.target.classList.remove('opacity-one');
			e.target.nextSibling.classList.add('opacity-one', 'active');
			e.target.nextSibling.classList.remove('opacity-zero');
			game.activeCard.push(e.target.nextSibling.style.backgroundImage);
			console.log(game.activeCard);
			setTimeout(game.rotateBack, 2000);
		}
	},
	rotateBack() {
		const rotatedCards = document.querySelectorAll('.active');
		if (
			rotatedCards.length === 2 &&
			game.activeCard[0] !== game.activeCard[1]
		) {
			rotatedCards.forEach((rotatedCard) => {
				rotatedCard.classList.remove('opacity-one', 'active');
				rotatedCard.previousSibling.classList.add('opacity-one');
				rotatedCard.previousSibling.classList.add('opacity-zero');
			});
			game.activeCard = [];
		} else if (game.activeCard[0] === game.activeCard[1]) {
			console.log('ooo');
			rotatedCards.forEach((rotatedCard) => {
				rotatedCard.remove();
			});
			game.activeCard = [];
		}
	},
	addPoint() {
		console.log('ooo');
	},
};

document.addEventListener('DOMContentLoaded', game.createCards);
