console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form successfuly submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img')

function reveal(evt) {
	evt.preventDefault();

	alert('Congrats, you have found and captured Dio!')
}

image.addEventListener('mouseover', reveal)