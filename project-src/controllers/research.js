const conich = document.getElementById('conich');
const sects  = document.getElementsByTagName('section');

let [i, j, k, z, f, g, h] = [0, 45, 180, 270, 300, 110, 25];

const conicStyle = (n) => {

	return `conic-gradient(from ${n}deg, #050c1c, #8500f9)`;
}

setInterval(() => {
	conich.style.backgroundImage = conicStyle(i);

	sects[0].style.backgroundImage = conicStyle(j);
	sects[1].style.backgroundImage = conicStyle(k);
	sects[2].style.backgroundImage = conicStyle(z);
	sects[3].style.backgroundImage = conicStyle(f);
	sects[4].style.backgroundImage = conicStyle(g);
	sects[5].style.backgroundImage = conicStyle(h);
	sects[6].style.backgroundImage = conicStyle(j);
	sects[7].style.backgroundImage = conicStyle(k);
	sects[8].style.backgroundImage = conicStyle(i);

	i++; j++; k++; z++; f++; g++; h++;
	console.log(sects.length);
}, 10);