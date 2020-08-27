const btn = document.getElementById('btn');
let result = document.querySelector('.description');
let headsNum = document.querySelector('.headsNum');
let tailsNum = document.querySelector('.tailsNum');
let totalNum = document.querySelector('.totalNum');
var img = document.getElementById('image');
let numHead = 0;
let numTail = 0;
let totalCases = 0;
btn.addEventListener('click', function () {
	let randomNum = getRandomNumber();
	// console.log(img.className);
	if (randomNum % 2 == 0) {
		img.src = './img/head.png';
		result.textContent = 'Heads';
		numHead++;
	} else {
		result.textContent = 'Tails';
		// console.log(img.className);
		img.src = './img/tail.png';
		numTail++;
	}
	totalCases++;
	headsNum.textContent = numHead;
	tailsNum.textContent = numTail;
	totalNum.textContent = totalCases;
});

function getRandomNumber() {
	return Math.floor(Math.random() * 123);
}
