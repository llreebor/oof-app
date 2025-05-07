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
