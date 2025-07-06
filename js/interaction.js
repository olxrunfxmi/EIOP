const boxHandlerButtonEl = document.querySelector("#boxHandler");
const boxInteractiveEl = document.querySelector("#boxBlob");
const bubbleButtonEl = document.querySelector("#bubbleHandler");
const traditionEl = document.querySelector("#tradition");

boxHandlerButtonEl.addEventListener("click", () => {
	const divEl = document.createElement("div");
	divEl.classList.add("columnbar");
	boxInteractiveEl.appendChild(divEl);

	if (boxInteractiveEl.querySelectorAll(".columnbar").length === 1) {
		const clearBtnEl = document.createElement("button");
		clearBtnEl.textContent = "Clear";
		clearBtnEl.classList.add("btn", "clr-btn", "clear");
		clearBtnEl.addEventListener("click", (e) => {
			e.currentTarget.parentElement.textContent = "";
		});
		boxInteractiveEl.appendChild(clearBtnEl);
	}
});
