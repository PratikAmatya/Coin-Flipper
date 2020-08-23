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
	// num.textContent = result;
	let randomNum = getRandomNumber();
	// console.log(randomNum);
	console.log(img.className);
	if (randomNum % 2 == 0) {
		img.src = './img/head.png';
		result.textContent = 'Heads';
		// result.classList.add(animationOne);
		// img.classList.add(animationOne);
		numHead++;
	} else {
		result.textContent = 'Tails';
		console.log(img.className);
		img.src = './img/tail.png';
		// img.classList.add(animationOne);
		// img.classList.toggle('animationOne');
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

// function change
