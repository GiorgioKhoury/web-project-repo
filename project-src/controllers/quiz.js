// MCQs
const MCQ1 = [
  {
    id: 0,
    ques: 'Which tag defines the largest heading?',
    opts:  ['<h1>', '<head>', '<heading>', '<h6>'],
  },
	{
		id:	1,
		ques: 'Which element is used to create a hyperlink?',
		opts:	['<a>', '<link>', '<url>', '<href>'],
	},
	{
		id:	2,
		ques:	'Which tag creates an unordered list?',
		opts:	['<ul>', '<ol>', '<li>', '<dl>'],
	},
	{
		id:	3,
		ques:	'Which HTML5 element contains the main content of the page?',
		opts:	['<body>', '<main>', '<content>', '<section>'],
	},
	{
		id:	4,
		ques:	'What type of CSS is stored in a separate .css file?',
		opts:	['External CSS', 'Internal CSS', 'Embedded CSS', 'Inline CSS'],
	},
	{
		id:	5,
		ques:	'Which character is used to refer to an element with a specified id?',
		opts:	['#', '.', '*', '$'],
	},
	{
		id:	6,
		ques:	'Which is the CSS universal selector (selects all elements)?',
		opts:	['*', '$', '.', '#'],
	},
	{
		id:	7,
		ques:	'Which HTML tag represents the table row?',
		opts:	['<tr>', '<th>', '<row>', '<table-row>'],
	},
	{
		id:	8,
		ques:	'Which HTML element represents a table header cell?',
		opts:	['<th>', '<table-head>', '<thead>', '<trh>'],
	},
	{
		id:	9,
		ques:	'Which CSS property changes the color of text?',
		opts:	['color', 'text-color', 'font-color', 'text-style']
	}
]



// Username input constant for validation
const username	= document.getElementById('username');					// Reference to the username textfield
const question	= document.getElementById('question');					// Reference to the question message
const timer    	= document.getElementById('timer');							// Reference to bar for animation timer
const options		= document.getElementById('options-list');			// Reference to the list of options

// Variables for Timeout and Interval
let timeOut, interval;

// Variables used for counting scores and questions
let count;
let userScore;
let questions;

// Useful variables
let user		= '';
let mclist	= [];

// Function before beginning the game
function tostart() {
	if(username.value !== '') {
		count = 0;
		userScore = 0;
		questions = 10;

		user 	= username.value;
		mclist = MCQ1;

		shuffleList();
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

	resetOptions(mclist[count]);
	count++;

	interval = setInterval(() => {
		let styleGradient = `linear-gradient(to right, #00BB00 ${i}%, #FFFFFF ${j}%)`;

		timer.style.backgroundImage = styleGradient;
		i++; j++;

	}, 50);

	timeOut = setTimeout(() => {
		clearInterval(interval);
			
		Array.from(options.children).forEach(el => {
			const { id } = el
			
			el.style.pointerEvents = 'none';
			el.style.cursor = 'default';
			if(parseInt(id) === 0)
				Object.assign(el.style, {
					backgroundColor: '#00FF00',
					animation: 'scale-animate .8s ease-in-out, move-to-right .8s .8s ease-in-out',
				});

			else
				Object.assign(el.style, {
					backgroundColor: '#FF0000',
					animation: 'shake .8s ease-in-out, drop .8s .8s ease-in-out',
				});
		});
				
		setTimeout(() => {
			clearTimeout(timeOut);

			if (count < questions) {

				start();
			}
			else {
				console.log(`Final Score: ${userScore}/${questions}`);

				count = 0;
				lock();
			}}, 1500);
	}, 5000);
}

// Setting and Resetting the options
function resetOptions() {
	console.log(mclist[count].ques);

	let { ques, opts } = mclist[count];

	question.innerHTML = ques;
	options.replaceChildren();
	for (let i = 0; i < opts.length; i++) {
		const li = document.createElement('li');
		li.id = `${i}`;

		options.appendChild(li);
	}

	Array.from(options.children).forEach((el, index) => {
		let temp = index === 0 ? 'correct' : 'incorrect';

		el.textContent = opts[index]
		el.addEventListener('click', () => selectOption(index, temp));

		Object.assign(el.style, {
			color: '#000',
			backgroundColor: '#BBB',
			animation: '',
			cursor: 'pointer',
			pointerEvents: 'auto'
		});
	});

	shuffle();
}

// Select Option
function selectOption(id, option) {
	Array.from(options.children).forEach((el, index) => {
		el.style.pointerEvents = 'none';
		el.style.cursor = 'default';
	});

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
	else {
		Array.from(options.children).forEach(el => {

			if(parseInt(el.id) === 0)
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
	}


	clearInterval(interval);
	clearTimeout(timeOut);

	const next = setTimeout(() => {
		if(count < questions) {

			start();
		}
		else {
			console.log(`Final Score: ${userScore}/${count}`);
		
			timer.style.backgroundImage = 'none';
			timer.style.backgroundColor = '#0B0';

			count = 0;
			lock();
		}
	}, 1500);
}

// Shuffles the questions list
function shuffleList() {
  for(let i = mclist.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = mclist[i];

		mclist[i] = mclist[j];
		mclist[j] = temp;
	}
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
	Array.from(options.children).forEach((el, index) => {
		
		Object.assign(el.style, {
			color: '#000',
			backgroundColor: '#BBB',
		})
	});
}

// Function to disable all options
function lock() {
	options.replaceChildren();
	for(let i = 0; i < 4; i++) {
		const li = document.createElement('li');
		
		options.appendChild(li);
	}

	Array.from(options.children).forEach((el, index) => {
		el.textContent = `[Option ${index+1}]`;

		Object.assign(el.style, {
			color: '#BBB',
			backgroundColor: '#DDD',
			animation: '',
		})
	});
}