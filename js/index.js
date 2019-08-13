document.querySelector('.menu-toggler').addEventListener('click', function() {
	this.classList.toggle('open');
	document.querySelector('.menu').classList.toggle('open');
})

document.addEventListener('scroll', function() {
	if (document.querySelector('.menu').classList[1] !== undefined && document.querySelector('.menu-toggler').classList[1] !== undefined) {
		document.querySelector('.menu').classList.remove('open');
		document.querySelector('.menu-toggler').classList.remove('open');
	}
})

window.addEventListener('resize', function() {
	if (document.querySelector('.menu').classList[1] !== undefined && document.querySelector('.menu-toggler').classList[1] !== undefined) {
		document.querySelector('.menu').classList.remove('open');
		document.querySelector('.menu-toggler').classList.remove('open');
	}
});