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
	textBox.value = "";
}

document.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		addTask()
	}
});


textBox.value = "test ";
addTask();

listContainer.addEventListener('click', function(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle('checked');
	}
	else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
	}
}, false)