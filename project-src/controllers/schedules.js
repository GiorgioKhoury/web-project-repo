const main  = document.getElementById('conic-main');
const user1 = document.getElementById('user-1');
const user2 = document.getElementById('user-2');

let i = 0;
onUser1 = true;
user2.style.opacity = 0;

setInterval(() => {
	let conicStyle = `conic-gradient(from ${i}deg, #050c1c, #8500f9)`;

	main.style.backgroundImage = conicStyle;
	i++;	
} , 5);

function switchUser() {
	if (onUser1) {
		Object.assign(user1.style, {
			transform: 'translateX(-100%)',
			opacity: 0,
			transition: '.8s ease-in-out'
		});

		Object.assign(user2.style, {
			transform: 'translateX(-100%)',
			opacity: 100,
			transition: '.8s ease-in-out'
		});

		onUser1 = false;
	}
	else {
		Object.assign(user1.style, {
		transform: 'translateX(0)',
		opacity: 100,
		transition: '.8s ease-in-out'
		});

		Object.assign(user2.style, {
		transform: 'translateX(0)',
		opacity: 0,
		transition: '.8s ease-in-out'
		});

		onUser1 = true;
	}
	
}