const links = document.querySelector('.links-container');
const toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', () => {
	links.classList.toggle('show-links');
});
