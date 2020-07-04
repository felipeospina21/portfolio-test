const links = document.querySelector('.links-container');
const toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', () => {
	links.classList.toggle('show-links');
});

let parallax = document.querySelector('.parallax');
let banner = document.querySelector('.banner');
// const section = document.querySelector('.section');

window.addEventListener('scroll', function() {
	let scroll = window.pageYOffset;

	parallax.style.transform = `translate3d(0px, ${scroll * -0.4}px, 0px)`;
	banner.style.transform = `translate3d(0px, ${scroll * -2}px, 0px)`;
});
