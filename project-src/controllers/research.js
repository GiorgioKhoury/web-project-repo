const conich = document.getElementById('conich');
const sects  = document.getElementsByTagName('section');

const engSpan = document.getElementById('english');
const arabSpan  = document.getElementById('arabic');
const headers = document.getElementsByClassName('headers');
const descriptions = document.getElementsByClassName('descriptions');

//
// ----- ANIMATION BORDERS -----
//
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


// 
// ----- TRANSLATION -----
//
const eng = [
	{
		header: 'The Internet and the World Wide Web',
		description: `
			Learn what the Internet and the World Wide Web are, how they work, and why
			the are important in our daily life.
			`
	},
];
const arb = [
	{
		header: 'الإنترنت وشبكة الإنترنت العالمية',
		description: `
			.تعرف على ما هما الإنترنت وشبكة الإنترنت العالمية، وكيف يعملان، ولماذا هذه مهمة في حياتنا اليومية
			`
	},
]

let english = true;
function render() {
	if (english) {
		eng.forEach((par, index) => {
			const { header, description } = par;

			headers[index].textContent = header;
			descriptions[index].textContent = description;
		});
	}
	else {
		arb.forEach((par, index) => {
			const { header, description } = par;

			headers[index].textContent = header;
			descriptions[index].textContent = description;
		});
	}
}
function toggleLanguage() {
	english = !english;

	if (english) {
		engSpan.style.color = '#000';
		arabSpan.style.color = '#FFF';
	} else {
		engSpan.style.color = '#FFF';
		arabSpan.style.color = '#000';
	}


	render();
}