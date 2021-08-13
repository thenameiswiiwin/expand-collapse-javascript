const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
	const cardBody = card.children[1];
	const button = card.firstElementChild.children[1];

	button.addEventListener('click', (e) => {
		const expand = button.innerText === 'Expand';
		if (expand) {
			cardBody.classList.add('show');
			button.innerText = 'Collapse';
		} else {
			cardBody.classList.remove('show');
			button.innerText = 'Expand';
		}
	});
});
