function keyd(ev){

		console.log(ev.keyCode);

		var monkey = document.getElementById('monkey');

		if(ev.keyCode === 38 && === 40){
			monkey.css("");
		}
	}

	var b = document.getElementsByTagName('body')[0];

	b.addEventListener('keydown', keyd);