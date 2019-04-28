var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

function $(x) {
	return document.getElementById(x);
}

//if small screen, don't run svg animation
if(width > 900){

	//Draw SVG as page scrolls

	// Get a reference to the <path>
	let path = document.querySelector('#path');
	// Get a reference to content areas
	// let loremPic = $('loremPic');
	// let ipsumPic = $('ipsumPic');
	// let dolorPic = $('dolorPic');
	let pathLength = path.getTotalLength();


	path.style.strokeDasharray = pathLength + ' ' + pathLength;
	path.style.strokeDashoffset = pathLength;

	updatePath = () => {
		let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) * .85 / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
		let drawLength = pathLength * scrollPercentage;
		path.style.strokeDashoffset = pathLength - drawLength;

		// let loremPicPos = scrollPercentage * 10 + 2;
		// loremPic.style.top = loremPicPos + '%';
		// let ipsumPicPos = scrollPercentage * 10 + 25;
		// ipsumPic.style.top = ipsumPicPos + '%';
		// let dolorPicPos = scrollPercentage * 10 + 47;
		// dolorPic.style.top = dolorPicPos + '%';
	}

	window.addEventListener('scroll', updatePath);
}