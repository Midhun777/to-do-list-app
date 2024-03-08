/*

var containerDiv = document.createElement('div');
containerDiv.className = 'container';

var todoAppDiv = document.createElement('div');
todoAppDiv.className = 'todo-app';

var heading = document.createElement('h1');
heading.textContent = 'To-Do List';

var img = document.createElement('img');
img.src = './assets/check-list.png';
img.alt = 'check-list.png';

heading.appendChild(img);

var rowDiv = document.createElement('div');
rowDiv.className = 'row';

var input = document.createElement('input');
input.type = 'text';
input.id = 'textBox';

var button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Add';
button.onclick = addTask;

rowDiv.appendChild(input);
rowDiv.appendChild(button);

var listUl = document.createElement('ul');
listUl.id = 'listContainer';

todoAppDiv.appendChild(heading);
todoAppDiv.appendChild(rowDiv);
todoAppDiv.appendChild(listUl);

containerDiv.appendChild(todoAppDiv);

document.body.appendChild(containerDiv);

*/

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
