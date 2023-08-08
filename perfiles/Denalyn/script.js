
let inicio = document.getElementById('inicio');
let descripcion = document.getElementById('descripcion');
let notas = document.getElementById('Notas-Materias')


descripcion.style.display = 'none';
notas.style.display = 'none';

// Selecciona todos los enlaces con la clase "nav-link"
const links = document.querySelectorAll('.nav-link');

// Itera sobre cada enlace y agrega un event listener para el evento "click"
links.forEach(link => {
	link.addEventListener('click', e => {
	// Previene el comportamiento predeterminado del enlace (navegar a otra página)
	e.preventDefault();

	// Oculta todas las secciones
	inicio.style.display = 'none';
	descripcion.style.display = 'none';
	notas.style.display = 'none';
	
	// Muestra la sección correspondiente al enlace que se hizo clic
	const target = e.target.getAttribute('href');
	document.querySelector(target).style.display = 'block';
	});
});