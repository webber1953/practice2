let inputBox = document.getElementById("userinput");
let button = document.getElementById("submit");
let area = document.getElementById("stuff");

button.addEventListener("click", function() {
	let p = document.createElement("p");
	let newSection = document.createElement("section");
	let delBtn = document.createElement("button");

	p.innerHTML = inputBox.value;
	delBtn.innerHTML = "delete";
	p.style.display = "inline";
	inputBox.value = "";
	newSection.append(p);
	newSection.append(delBtn);

	stuff.prepend(newSection);

	delBtn.addEventListener("click", function() {
		stuff.removeChild(newSection);
	})
})