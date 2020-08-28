// Declaring variables
const btn = document.getElementById('btn');
let result = document.querySelector('.description');
let headsNum = document.querySelector('.headsNum');
let tailsNum = document.querySelector('.tailsNum');
let totalNum = document.querySelector('.totalNum');
var img = document.getElementById('image');
let numHead = 0;
let numTail = 0;
let totalCases = 0;

// Adding event listener
btn.addEventListener('click', function () {
	let randomNum = getRandomNumber();
	// console.log(randomNum);
	if (randomNum % 2 == 0) {
		img.src = './img/head.png';
		result.textContent = 'Heads';
		numHead++;
		// console.log('Even');
	} else {
		result.textContent = 'Tails';
		// console.log(img.className);
		img.src = './img/tail.png';
		// console.log('Odd');
		numTail++;
	}
	totalCases++;
	headsNum.textContent = numHead;
	tailsNum.textContent = numTail;
	totalNum.textContent = totalCases;
});

// function that gives random number between 0 and 50
function getRandomNumber() {
	return Math.floor(Math.random() * 50);
}
