// Username input constant for validation
const username = document.getElementById('username');

const timer    	= document.getElementById('timer');							// Reference to bar for animation timer
const options	= document.getElementById('options-list');				// Reference to the list of options

// Variables for Timeout and Interval
let timeOut, interval;

// Variables used for counting scores
let count = 1;
let userScore = 0;
let questions = 5;

// Function before beginning the game
function tostart() {
	if(username.value !== '') {
		count = 1;
		userScore = 0;

		unlock();
		start();
	} else {
		alert('Please enter username in order to start.');
	}
}

// Start Function
function start() {
		// Variables used for the loading bar animation
		let i = 0;
		let j = 10;

		resetOptions();
		interval = setInterval(() => {
			let styleGradient = `linear-gradient(to right, #00BB00 ${i}%, #FFFFFF ${j}%)`;

			timer.style.backgroundImage = styleGradient;
			i++; j++;

		}, 50);

		timeOut = setTimeout(() => {
			
			setTimeout(() => {
				if (count < questions){
					count++;

					start();
				}
				else {
					console.log(`Final Score: ${userScore}/${questions}`);

					lock();
				}
			}, 1500);
		}, 5000);

		console.log('Timeout and Interval set!!');
}

// Setting and Resetting the options
function resetOptions() {

	unlock();
	shuffle();
}

// Select Option
function selectOption(id, option) {
	if(option === 'correct') {
		Array.from(options.children).forEach(el => {
			if(parseInt(el.id) === id)
				Object.assign(el.style, {
					backgroundColor: '#00FF00',
					animation: 'scale-animate .8s ease-in-out, move-to-right .8s .8s ease-in-out'
				});
		});
	
		userScore++;
	}
	else
		Array.from(options.children).forEach(el => {
			if(parseInt(el.id) === 1)
				Object.assign(el.style, {
					backgroundColor: '#00FF00',
					animation: 'scale-animate .8s ease-in-out, move-to-right .8s .8s ease-in-out'
				});

			if(parseInt(el.id) === id)
				Object.assign(el.style, {
					backgroundColor: '#FF0000',
					animation: 'shake .8s ease-in-out, drop .8s .8s ease-in-out'
				});
		});

	clearInterval(interval);
	clearTimeout(timeOut);

	const next = setTimeout(() => {
		if(count < questions) {
			count++;

			start();
		}
		else {
			console.log(`Final Score: ${userScore}/${count}`);
		
			lock();
		}
	}, 1500);
}

// Function to shuffle the options
function shuffle() {
	
	for(let i = 0; i <= options.children.length; i++) {
		let temp = options.children[Math.random() * i | 0];

		options.appendChild(temp);
	}
}

// Function to unlock all disabled options
function unlock() {
	Array.from(options.children).forEach(el => {
		Object.assign(el.style, {
			color: '#000',
			backgroundColor: '#BBB',
			animation: '',
		})
	});
}

// Function to disable all options
function lock() {
	Array.from(options.children).forEach(el => {
		Object.assign(el.style, {
			color: '#BBB',
			backgroundColor: '#DDD',
			animation: '',
		})
	});
}