const discountButtonEl = document.querySelector("#discount-btn");
const loginButtonEl = discountButtonEl.nextElementSibling;

const discountDialog = document.querySelector("#discount-dialog");
const loginDialog = discountDialog.nextElementSibling;

const popoverButton = document.querySelector("#closenavpopover");

discountButtonEl.addEventListener("click", () => {
	discountDialog.showModal();
});

discountDialog.addEventListener("click", (e) => {
	if (e.target === discountDialog) {
		discountDialog.close();
	}
});

loginButtonEl.addEventListener("click", () => {
	loginDialog.showModal();
});

loginDialog.addEventListener("click", (e) => {
	if (e.target === loginDialog) {
		loginDialog.close();
	}
});

popoverButton.addEventListener("click", () => {
	popoverButton.parentElement.hidePopover();
});
