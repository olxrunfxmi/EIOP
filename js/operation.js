const windowData = [document.body.scrollHeight, window.innerHeight];
const scrollIdEl = document.querySelector("#scrollId");
const blocks = document.querySelectorAll(".blocks > .block");


const buttonsHolderEl = document.querySelector(".button-group");
const contentsEl = document.querySelector(".contents");

window.addEventListener("scroll", () => {
	const scrollPercent = obtainScrollValue();
	morphBlocks(blocks, Math.ceil(scrollPercent / 10));
	scrollIdEl.textContent = `${scrollPercent}%`;
});

window.addEventListener("resize", () => {
	const scrollPercent = obtainScrollValue();
	morphBlocks(blocks, Math.ceil(scrollPercent / 10));
	scrollIdEl.textContent = `${scrollPercent}%`;
});

function obtainScrollValue() {
	const value = Math.floor(
		(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
	);
	return value;
}

function morphBlocks(blockHolder, num) {
	const root = document.documentElement;

	blockHolder.forEach((block, index) => {
		const backgroundColor =
			getComputedStyle(root).getPropertyValue("--grey-overlay");
		block.style.background = backgroundColor;

		if (index <= num - 1) {
			const backgroundColor =
				getComputedStyle(root).getPropertyValue("--black-faint");
			block.style.background = backgroundColor;
		}
	});
}

window.addEventListener("load", () => {
	setHeight(contentsEl, 0);
});

buttonsHolderEl.addEventListener("click", (e) => {
	const currentButtonEl = e.target.closest("button");
	const allButtonEls = buttonsHolderEl.querySelectorAll("button");

	if (currentButtonEl) {
		setTransform(contentsEl, currentButtonEl);
		allButtonEls.forEach((buttonEl) => (buttonEl.dataset.state = "inactive"));
		currentButtonEl.dataset.state = "active";
	}

	setHeight(contentsEl, currentButtonEl.dataset.num);
});

window.addEventListener("resize", () => {
	const currentButtonEl = buttonsHolderEl.querySelector(
		'button[data-state="active"]'
	);
	setTransform(contentsEl, currentButtonEl);
	setHeight(contentsEl, currentButtonEl.dataset.num);
});

function setTransform(contents, currentButton) {
	const transformValue =
		contents.getBoundingClientRect().width * Number(currentButton.dataset.num);
	contents.style.setProperty("--x", transformValue);
}

function setHeight(contents, num) {
	const currentContentEl = contents.querySelector(`[data-num='${num}']`);
	const height = currentContentEl.getBoundingClientRect().height;
	contents.style.setProperty("--height", height);
}
