const body   = document.getElementById('body');

let [x, y] = [0, 20];
let inc = true;

setInterval(() => {
	body.style.backgroundImage = `radial-gradient(#8500f9 ${x}%, #050c1c ${y}%)`;
	body.style.backgroundAttachment = 'fixed';

	if (inc)
		x++, y++;
	else
		x--, y--;

	if (y === 50)
		inc = false;
	if (x === 10)
		inc = true;

}, 70);