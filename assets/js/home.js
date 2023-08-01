
// home slider js

const cards = document.querySelectorAll('.card');
let currentCard = 0;

function showCard(index) {
  cards[currentCard].classList.remove('active');
  currentCard = (currentCard + index + cards.length) % cards.length;
  cards[currentCard].classList.add('active');
}

// Show the first card initially
showCard(0);

// Set a timer to change the card every 5 seconds
setInterval(() => showCard(1), 5000);

//feed js
// const feedItems = document.querySelectorAll('.feed-item');

// feedItems.forEach((item, index) => {
//   const numberElement = document.createElement('span');
//   numberElement.innerText = `${index + 1}. `;
//   numberElement.style.fontWeight = 'bold';
//   item.insertBefore(numberElement, item.firstChild);
// });
