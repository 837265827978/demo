console.log('sha')

let theme = localStorage.getItem('theme')

let themeDots = document.getElementById('theme-options-wrapper');


for(var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})

}

function setTheme(mode){
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'style.css'
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'blue.css'
	}

	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css'
	}

	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}

}

// we want to set a customattribute