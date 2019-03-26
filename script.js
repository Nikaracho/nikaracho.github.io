
const image = document.querySelectorAll(.ima);

function change () {
	const cont = document.querySelectorAll('.cont');
	cont.innerHTML = '.cactive {display: block}';
}

image.forEach(image => addEventListener('onclick', change));

