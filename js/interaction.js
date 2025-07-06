const boxHandlerButtonEl = document.querySelector("#boxHandler");
const boxInteractiveEl = document.querySelector("#boxBlob");
const bubbleButtonEl = document.querySelector("#bubbleHandler");
const traditionEl = document.querySelector("#tradition");

boxHandlerButtonEl.addEventListener("click", () => {
	const divEl = document.createElement("div");
	divEl.classList.add("columnbar");
	boxInteractiveEl.appendChild(divEl);

	if (boxInteractiveEl.querySelectorAll(".columnbar").length === 1) {
		const clearBtnEl = generateElement(
			"button",
			["btn", "clr-btn", "clear"],
			"Clear"
		);
		clearBtnEl.addEventListener("click", (e) => {
			e.currentTarget.parentElement.textContent = "";
		});
		boxInteractiveEl.appendChild(clearBtnEl);
	}
});

bubbleButtonEl.addEventListener("click", () => {
	if (traditionEl.querySelectorAll(".circle").length === 0) {
		const classArr = ["circle"];
		const sEl = generateElement("div", classArr, "Divisibility Calculator", {
			name: "type",
			value: "s",
		});
		const mEl = generateElement("div", classArr, "EIOP", {
			name: "type",
			value: "m",
		});
		const lEl = generateElement("div", classArr, "Odin Project", {
			name: "type",
			value: "l",
		});
		const xlEl = generateElement("div", classArr, "Recreations", {
			name: "type",
			value: "xl",
		});
		traditionEl.append(sEl, mEl, lEl, xlEl);
	} else {
		const circleEls = traditionEl.querySelectorAll(".circle");
		circleEls.forEach((circlEl) => {
			circlEl.remove();
		});
	}
});

function generateElement(element, classArr, textContent, dataObj) {
	const el = document.createElement(element);
	el.textContent = textContent;
	if (classArr) {
		el.classList.add(...classArr);
	}
	if (dataObj) {
		el.dataset[dataObj.name] = [dataObj.value];
	}
	return el;
}
