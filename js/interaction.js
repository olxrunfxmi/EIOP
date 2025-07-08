const boxHandlerButtonEl = document.querySelector("#boxHandler");
const boxInteractiveEl = document.querySelector("#boxBlob");
const bubbleButtonEl = document.querySelector("#bubbleHandler");
const traditionEl = document.querySelector("#tradition");
const gameBarEl = document.querySelector(".game-bar");
const contentDisEl = gameBarEl.nextElementSibling;

const projectDetails = {
	maxlength: {
		name: "Maxlength UI",
		summary:
			"An attempt to create a textarea input that indicates when you are close to the maximum allowable length.",
		content: [
			"Maxlength UI is a straightforward user interface component designed to handle maximum length constraints for input fields. It provides a simple UI solution for showing maxlength functionality to users.",
			"Using visual feedback components, each input area help users understand character limits which can be applied with text inputs, textareas, or other form fields. Some of the UI components display character counts, remaining characters, or progress indicators to improve user experience when dealing with length-restricted input fields. These are clean, (possibly) reusable interface element that can aim to help web applications to enhance form usability and user feedback. Hopefully when I learn React, I will be able to recreate such as actual reusable interfaces.",
		],
	},
	carousel: {
		name: "Carousel UI",
		summary:
			"An inline and block type carousel that showcase how carousel can work across different views.",
		content: [
			"This project shows different display modes for carousel components, specifically focusing on inline and block-type axis (row and column, in layman terms). It's reference example showing how carousels can be implemented and styled to work in inline axis (across the x-axis, taking up a limited width) and block elements (across the y-axis, taking up full width or defined dimensions).",
			"You can check the repository for the code, but the hosted site shows styling demonstrations and interactive prototypes that showcase the differences between inline and block carousel behaviors. Worked on this to understand the nuances of carousel implementation in different layout contexts especially within a flexible environment that can adapt to various design requirements. Overall, utilized HTML, CSS, and JavaScript to create responsive, functional carousels that can be seamlessly integrated into different types of web layouts.",
		],
	},
	navbar: {
		name: "Navbar UI",
		summary:
			"Collection of navbar implementation which were attempted independently using core CSS and JS knowledge",
		content: [
			"The intention around this is to build a collection of navigational menu typically seen on website and over time experiment with weird or not-so-common implementations. Most of them will be independently designed and a few will be recreations.",
			"From fullscreen to pill navbars, layout, interaction and performance are key importance to the different implementations. As much as possible, JavaScript implementation will be avoided, but if based on current knowledge implementing an idea will be hard, then it will be used.",
		],
	},
	calculator: {
		name: "Divisibility Calculator",
		summary:
			"A divisibility calculator that shows whether a number is divisible by digits 1 through 9",
		content: [
			"The Divisibility Calculator is an educational tool designed to test whether any given number is divisible by the single digits 1 through 9. The project focuses specifically on using mathematical divisibility rules rather than simple division operations, making it both informative and engaging for users who want to learn about number theory concepts.",
			"The calculator presents results in an informative and cool way using visual feedback, explanations of the divisibility rules being applied, or interactive elements that help users understand why a number is by specific digits. This type of project is particularly useful for students learning about divisibility rules, as it can demonstrate concepts like divisibility by 2 (even numbers), divisibility by 3 (sum of digits), divisibility by 5 (ending in 0 or 5), and other mathematical patterns.",
			"The emphasis on using actual divisibility rules rather than just performing division operations makes it a valuable educational resource for understanding the underlying mathematical principles. The goal is to build more mathematical fun tools like this over time.",
		],
	},
	eiop: {
		name: "EIOP Landing Page",
		summary:
			"Landing Page to showcase my current learning progress, what I have built and what's to come.",
		content: [
			"It serves as a reference point to show what I have learned (e.g CSS, JS, Design, Performance, React) to a good extent to build out tools and ideas I have. It includes much of what I have built to showcase my learnings. EIOP means Everything In One Place. I intend to do this as often as possible for all my learning timelines.",
			"Currently, I have learnt CSS and JS enough to build some cools tools or understand how others build things on the web to a good extent. Also, I can fetch data and other things among others. EIOP is expected to showcase that.",
		],
	},
};

boxHandlerButtonEl.addEventListener("click", () => {
	const divEl = document.createElement("div");
	divEl.classList.add("columnbar");
	boxInteractiveEl.appendChild(divEl);

	if (boxInteractiveEl.querySelectorAll(".columnbar").length === 1) {
		const clearBtnEl = generateElement("button", "Clear", undefined, [
			"btn",
			"clr-btn",
			"clear",
		]);
		clearBtnEl.addEventListener("click", (e) => {
			e.currentTarget.parentElement.textContent = "";
		});
		boxInteractiveEl.appendChild(clearBtnEl);
	}
});

bubbleButtonEl.addEventListener("click", () => {
	if (traditionEl.querySelectorAll(".circle").length === 0) {
		const classArr = ["circle"];
		const sEl = generateElement(
			"a",
			"Divisibility Calculator",
			"https://olxrunfxmi.github.io/divisibility-calculator",
			classArr,
			{
				name: "type",
				value: "s",
			}
		);
		const mEl = generateElement(
			"a",
			"EIOP",
			"https://olxrunfxmi.github.io/EIOP",
			classArr,
			{
				name: "type",
				value: "m",
			}
		);
		const lEl = generateElement(
			"a",
			"Odin Project",
			"https://olxrunfxmi.github.io/Etch-A-Sketch",
			classArr,
			{
				name: "type",
				value: "l",
			}
		);
		const xlEl = generateElement(
			"a",
			"Recreations",
			"https://olxrunfxmi.github.io/recreations",
			classArr,
			{
				name: "type",
				value: "xl",
			}
		);
		traditionEl.append(sEl, mEl, lEl, xlEl);
	} else {
		const circleEls = traditionEl.querySelectorAll(".circle");
		circleEls.forEach((circlEl) => {
			circlEl.remove();
		});
	}
});

gameBarEl.addEventListener("mouseover", (e) => {
	if (e.target.closest(".block-item-alternate")) {
		const projectEl = e.target.closest(".block-item-alternate");
		const projectData = projectDetails[projectEl.dataset.info];

		const headingEl = contentDisEl.querySelector(".link-block > h5");
		headingEl.textContent = projectData.name;

		const summaryEl = contentDisEl.querySelector(".link-block > p");
		summaryEl.textContent = projectData.summary;

		const paraseriesEl = contentDisEl.querySelector(".para-series");
		paraseriesEl.textContent = "";
		projectData.content.forEach((para) => {
			const paraEl = generateElement("p", para);
			paraseriesEl.appendChild(paraEl);
		});
	}
});

function generateElement(element, textContent, href, classArr, dataObj) {
	const el = document.createElement(element);
	el.textContent = textContent;
	if (classArr) {
		el.classList.add(...classArr);
	}
	if (dataObj) {
		el.dataset[dataObj.name] = [dataObj.value];
	}

	if (href) {
		el.href = href;
	}
	return el;
}
