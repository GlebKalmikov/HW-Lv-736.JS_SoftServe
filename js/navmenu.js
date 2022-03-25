(function() {
	document.querySelector('.header_burger').addEventListener('click', () => {
		document.querySelector('.header_burger').classList.toggle('active');
		document.querySelector('.header_menu').classList.toggle('active');
		document.querySelector('body').classList.toggle('active');
	});
})();

