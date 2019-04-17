//Draw SVG as page scrolls

// Get a reference to the <path>
let path = document.querySelector('#path');

// Get length of path... ~577px in this demo
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

updatePath = () => {
	let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)*.8 / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	let drawLength = pathLength * scrollPercentage;
	path.style.strokeDashoffset = pathLength - drawLength;
}

window.addEventListener('scroll', updatePath);