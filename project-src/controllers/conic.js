const conics = document.getElementsByClassName('conic-animator');
const port	 = document.getElementById('port-text');

// Variable used for the conic animator
let [i, j, k, z] = [0, 180, 90, 270];

setInterval(() => {
	const conicStyle = (n) => `conic-gradient(from ${n}deg, #050c1c, #8500f9)`;

	conics[0].style.backgroundImage = conicStyle(i);
	conics[1].style.backgroundImage = conicStyle(j);
	conics[2].style.backgroundImage = conicStyle(k);
	conics[3].style.backgroundImage = conicStyle(z);

	i++, j++, k++, z++;
}, 5);

let word = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];
let temp = [];
let count = 0;
let write = true;

function start() {
	const type = setInterval(() => {
		port.textContent = temp.join('');

		if (write) {
			temp.push(word[count]);

			count++;
		} else {
			temp.pop();

			count--;
		}

		if(count === word.length+1 || count === -1) {
			clearInterval(type);

			pause();
		}
	}, 200);
}

function pause() {
	setTimeout(() => {
		if (count === word.length+1)
			write = false;
		else if (count === -1)
			write = true;

		start();
	}, 500);
}

start();