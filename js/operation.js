const windowData = [document.body.scrollHeight, window.innerHeight];
const scrollIdEl = document.querySelector("#scrollId");
const blocks = document.querySelectorAll(".blocks > .block");

console.log(blocks);

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
