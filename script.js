const container = document.querySelector('.container');

const game = {
	cardsRight: '',
	activeCard: [],
	cardImages: [
		'js',
		'html',
		'css',
		'react',
		'angular',
		'vue',
		'php',
		'python',
		'java',
		'c',
		'js',
		'html',
		'css',
		'react',
		'angular',
		'vue',
		'php',
		'python',
		'java',
		'c',
	],
	indexArr: [],
	randomizeCards() {
		for (let i = 0; i < 20; i++) {
			const sort = Math.floor(Math.random() * 20);
			if (game.indexArr.includes(sort)) {
				i--;
			} else {
				game.indexArr.push(sort);
			}
		}
	},
	createCards() {
		game.randomizeCards();
		for (i = 0; i < 20; i++) {
			const card = document.createElement('div');
			const cardRight = document.createElement('div');
			const cardLeft = document.createElement('div');
			card.classList.add('card');
			cardRight.classList.add('card-right', 'opacity-one');
			cardLeft.classList.add('card-left', 'opacity-zero');
			cardLeft.style.backgroundImage = `url(./img/${
				game.cardImages[game.indexArr[i]]
			}.png)`;
			container.appendChild(card);
			card.append(cardRight, cardLeft);
		}
		this.cardsRight = document.querySelectorAll('.card-right');
		this.cardsRight.forEach((card) => {
			card.addEventListener('click', game.rotateCard);
		});
	},
	rotateCard(e) {
		if (e.target.nextSibling.classList.contains('active')) {
			e.preventDefault();
		} else {
			if (game.activeCard.length < 2) {
				e.target.classList.add('opacity-zero', 'rotate');
				e.target.classList.remove('opacity-one');
				e.target.nextSibling.classList.add('opacity-one', 'active', 'rotate');
				e.target.nextSibling.classList.remove('opacity-zero');
				game.activeCard.push(e.target.nextSibling.style.backgroundImage);
				setTimeout(game.rotateBack, 2000);
			}
		}
	},
	rotateBack() {
		const rotatedCards = document.querySelectorAll('.active');
		if (
			rotatedCards.length === 2 &&
			game.activeCard[0] !== game.activeCard[1]
		) {
			rotatedCards.forEach((rotatedCard) => {
				rotatedCard.classList.remove('opacity-one', 'active', 'rotate');
				rotatedCard.previousSibling.classList.add('opacity-one');
				rotatedCard.previousSibling.classList.remove('rotate');
			});
			game.activeCard = [];
		} else if (game.activeCard[0] === game.activeCard[1]) {
			rotatedCards.forEach((rotatedCard) => {
				rotatedCard.remove();
			});
			game.activeCard = [];
		}
	},
};

document.addEventListener('DOMContentLoaded', game.createCards);
