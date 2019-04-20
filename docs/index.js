//Draw SVG as page scrolls

// Get a reference to the <path>
let path = document.querySelector('#path');
// Get a reference to content areas
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
// Get length of path... ~577px in this demo
let pathLength = path.getTotalLength();


path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

updatePath = () => {
	let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)*.8 / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	let drawLength = pathLength * scrollPercentage;
	path.style.strokeDashoffset = pathLength - drawLength;

	let card1Pos = 4 + scrollPercentage * 15;
	card1.style.top = card1Pos + '%';
	let card2Pos = 30 + scrollPercentage * 15;
	card2.style.top = card2Pos + '%';
	let card3Pos = 53 + scrollPercentage * 15;
	card3.style.top = card3Pos + '%';
}

window.addEventListener('scroll', updatePath);

//Hide/show header at scroll point