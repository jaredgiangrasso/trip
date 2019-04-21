//Draw SVG as page scrolls

// Get a reference to the <path>
let path = document.querySelector('#path');
// Get a reference to content areas
let loremPic = document.querySelector('#loremPic');
let ipsumPic = document.querySelector('#ipsumPic');
let dolorPic = document.querySelector('#dolorPic');
// Get length of path... ~577px in this demo
let pathLength = path.getTotalLength();


path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

updatePath = () => {
	let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)*.9 / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	let drawLength = pathLength * scrollPercentage;
	path.style.strokeDashoffset = pathLength - drawLength;

	let loremPicPos = scrollPercentage * 10 + 2;
	loremPic.style.top = loremPicPos + '%';
	let ipsumPicPos = scrollPercentage * 10 + 25;
	ipsumPic.style.top = ipsumPicPos + '%';
	let dolorPicPos = scrollPercentage * 10 + 47;
	dolorPic.style.top = dolorPicPos + '%';
}

window.addEventListener('scroll', updatePath);

//Hide/show header at scroll point