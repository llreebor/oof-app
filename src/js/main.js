// Toggle Password Visibility
function togglePasswordVisibility() {
	const passwordInput = document.querySelectorAll(".password-input")

	if (!passwordInput) return
	const togglePasswordButtons = document.querySelectorAll(
		".toggle-password-btn",
	)
	const iconsVisible = document.querySelectorAll(".pswd-icon-visible")
	const iconsHidden = document.querySelectorAll(".pswd-icon-hidden")

	togglePasswordButtons.forEach((toggleBtn, idx) => {
		toggleBtn.addEventListener("click", (e) => {
			e.preventDefault()
			if (passwordInput[idx].type === "password") {
				passwordInput[idx].type = "text"
				iconsVisible[idx].style.display = "block"
				iconsHidden[idx].style.display = "none"
			} else {
				passwordInput[idx].type = "password"
				iconsVisible[idx].style.display = "none"
				iconsHidden[idx].style.display = "block"
			}
		})
	})
}

togglePasswordVisibility()

// Toggle Slidebar visibility
function toggleSidebarVisibility() {
	const leftSidebar = document.getElementById("left-sidebar")
	const leftSidebarTrigger = document.getElementById("left-sidebar-trigger")
	const centerSidebar = document.getElementById("center-sidebar")
	const centerSidebarTrigger = document.getElementById("center-sidebar-trigger")
	const rightSidebar = document.getElementById("right-sidebar")
	const rightSidebarTrigger = document.getElementById("right-sidebar-trigger")
	if (!leftSidebar) return
	if (!rightSidebar) return
	if (!centerSidebar) return

	leftSidebarTrigger.addEventListener("click", () => {
		leftSidebar.classList.toggle("closed")
		leftSidebarTrigger.classList.toggle("active")
	})
	centerSidebarTrigger.addEventListener("click", () => {
		centerSidebar.classList.toggle("closed")
		centerSidebarTrigger.classList.toggle("active")
		console.log(22)
	})
	rightSidebarTrigger.addEventListener("click", () => {
		rightSidebar.classList.toggle("closed")
		rightSidebarTrigger.classList.toggle("active")
	})
}
toggleSidebarVisibility()

// Data selects
function initializeCustomSelect(selectId, optionsId, selectedOptionId) {
	const customSelect = document.getElementById(selectId)
	const selectedOption = document.getElementById(selectedOptionId)
	const customOptions = document.getElementById(optionsId)
	const options = customOptions.getElementsByClassName("option")

	customSelect.addEventListener("click", () => {
		customOptions.classList.toggle("hidden")
		const arrow = customSelect.querySelector(".arrow svg")
		arrow.style.transform = customOptions.classList.contains("hidden")
			? "rotate(0deg)"
			: "rotate(180deg)"
	})

	for (let option of options) {
		option.addEventListener("click", () => {
			selectedOption.innerText = option.innerText
			customOptions.classList.add("hidden")
			const arrow = customSelect.querySelector(".arrow svg")
			arrow.style.transform = "rotate(0deg)"
		})
	}

	document.addEventListener("click", (event) => {
		const target = event.target
		if (!customSelect.contains(target) && !customOptions.contains(target)) {
			customOptions.classList.add("hidden")
			const arrow = customSelect.querySelector(".arrow svg")
			arrow.style.transform = "rotate(0deg)"
		}
	})
}
initializeCustomSelect("select-1", "options-1", "selected-option-1")
initializeCustomSelect("select-2", "options-2", "selected-option-2")
