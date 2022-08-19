/*THEME*/
const btn = document.querySelector('.darkMode');
/*SLIDER*/
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionlast = sliderSection[sliderSection.length - 1];

const btnRigth = document.querySelector('#btn-rigth');
const btnLeft = document.querySelector('#btn-left');

slider.insertAdjacentElement('afterbegin', sliderSectionlast);

function moveRigth() {
	let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
	slider.style.marginLeft = '-200%';
	slider.style.transition = 'all 0,5s';
	setTimeout(function () {
		slider.style.transition = 'none';
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = '-100%';
	}, 500);
}

function moveleft() {
	let sliderSection = document.querySelectorAll('.slider-section');
	let sliderSectionlast = sliderSection[sliderSection.length - 1];
	slider.style.marginLeft = '0%';
	slider.style.transition = 'all 0,5s';
	setTimeout(function () {
		slider.style.transition = 'none';
		slider.insertAdjacentElement('afterbegin', sliderSectionlast);
		slider.style.marginLeft = '-100%';
	}, 500);
}

btnRigth.addEventListener('click', function () {
	moveRigth();
});

btnLeft.addEventListener('click', function () {
	moveleft();
});

setInterval(function () {
	moveRigth();
}, 5000);

/*______________________THEME__________________________*/
if (localStorage.getItem('theme') === '') {
	localStorage.setItem('theme', 'light');
}

const themeUsed = localStorage.getItem('theme');

if (themeUsed === 'dark') {
	document.body.style.background = '#2c2c2c';
	btn.textContent = 'Modo Claro';
} else {
	document.body.style.background = '#e3e3e3';
	btn.textContent = 'Modo Oscuro';
}

btn.addEventListener('click', () => {
	const themeUsed = localStorage.getItem('theme');

	if (themeUsed === 'dark') {
		localStorage.setItem('theme', 'light');
		document.body.style.background = '#e3e3e3';
		btn.textContent = 'Modo Oscuro';
	} else {
		localStorage.setItem('theme', 'dark');
		document.body.style.background = '#2c2c2c';
		btn.textContent = 'Modo Claro';
	}
});

/*_______________________SLIDER___________________________*/
