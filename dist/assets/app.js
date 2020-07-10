const links = document.querySelector('.links');
const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

toggleBtn.addEventListener('click', () => {
	// links.classList.toggle('show-links');
	const linksContainerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;

	if (linksContainerHeight === 0) {
		linksContainer.style.height = `${linksHeight + 30}px`;
	} else {
		linksContainer.style.height = 0;
	}
});

const parallax = document.querySelector('.parallax');
const parallaxAbout = document.querySelector('.parallax-about');
const banner = document.querySelector('.banner');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const skillsSection = document.getElementById('skills');
const container = document.querySelector('.container');

// Parallax Effect
window.addEventListener('scroll', function() {
	let scroll = window.pageYOffset;
	const aboutPosition = aboutSection.offsetTop;
	const portfolioPosition = portfolioSection.offsetTop;
	const skillsPosition = skillsSection.offsetTop;
	const containerHeight = container.getBoundingClientRect().height;
	const topLink = document.querySelector('.top-link');

	parallax.style.transform = `translate3d(0px, ${scroll * -0.4}px, 0px)`;
	banner.style.transform = `translate3d(0px, ${scroll * -1}px, 0px)`;

	if (scroll < aboutPosition) {
		aboutSection.style.opacity = 0;
		portfolioSection.style.opacity = 0;
		skillsSection.style.opacity = 0;
		linksContainer.style.height = 0;
		topLink.classList.remove('show-link');
	}
	if (scroll > aboutPosition - containerHeight) {
		aboutSection.style.opacity = 1;
		topLink.classList.add('show-link');
		parallaxAbout.style.transform = `translate3d(0px, ${scroll * -0.4}px, 0px)`;
	}

	if (scroll > portfolioPosition - containerHeight + 100) {
		aboutSection.style.opacity = 0;
		portfolioSection.style.opacity = 1;
	}

	if (scroll > skillsPosition - containerHeight + 200) {
		portfolioSection.style.opacity = 0;
		skillsSection.style.opacity = 1;
	}
});
