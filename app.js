const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInput();
});

function checkInput() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	if (usernameValue === "") {
		setErrorFor(username, "Your Name can't be blank");
	} else {
		setSuccessFor(username);
	}
	if (emailValue === "") {
		setErrorFor(email, "Your Email can't be blank");
	} else {
		setSuccessFor(email);
	}
	if (passwordValue === "") {
		setErrorFor(password, "Your password can't be blank");
	}else {
		setSuccessFor(password);
	}
	if (password2Value === "") {
		setErrorFor(password2, "Your password2 can't be blank");
	}else if(passwordValue !== password2Value){
		setErrorFor(password2, "Your password2 can't be blank");
	} else {
		setSuccessFor(password2);
	};
};
function setErrorFor(input, massage) {
	const formControl = input.parentElement;
	const massageText = formControl.querySelector("small");
	formControl.className = "form-control error";
	massageText.innerText = massage;
};
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className="form-control success";
};