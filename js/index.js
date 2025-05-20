const discountButtonEl = document.querySelector("#discount-btn");
const discountDialog = document.querySelector("#discount-dialog");

discountButtonEl.addEventListener("click", () => {
	discountDialog.showModal();
});

discountDialog.addEventListener("click", (e) => {
	if (e.target === discountDialog) {
		discountDialog.close();
	}
});
