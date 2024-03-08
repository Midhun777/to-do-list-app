const textBox = document.getElementById('textBox');
const listContainer = document.getElementById('listContainer');

function addTask() {
	if (textBox.value == '') {
		alert('invalid input!')
	}
	else {
		let li = document.createElement('li');
		li.innerHTML = textBox.value;
		listContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = "×";
		li.appendChild(span);
	}
	saveData();
	textBox.value = "";
}

document.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		addTask();
	}
});

listContainer.addEventListener('click', function(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle('checked');
		saveData();
	}
	else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
		saveData();
	}
}, false)

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();