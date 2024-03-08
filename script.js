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
input.placeholder = 'New Task';

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

//style
var styleElement = document.createElement('style');

var cssRules = `
    body {
        background: #DDE3E3;
        color: #3D455C;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        width: 100%;
        max-width: 500px;
        min-height: 100vh;
        padding: 10px;
    }

    .todo-app {
        width: 100%;
        background: #9AACB8;
        margin: 70px auto 20px;
        padding: 40px 30px 70px;
        border-radius: 10px;
    }

    h1 {
        font-size: 25px;
        display: flex;
        align-items: center;
        margin-bottom: 7px;
    }

    img {
        width: 24px;
        margin-left: 8px;
    }

    input {
        background: #F8F8F8;
        height: 30px;
        width: 205px;
        border: 1.4px solid #0C4D63;
        border-radius: 4.5px;
        padding: 6px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 3px;
    }

    button {
        height: 30px;
        width: 60px;
        border: 1.6px solid #0C4D63;
        border-radius: 4.5px;
        background: #B37B56;
        color: #FFF0D3;
        font-weight: 700;
        box-shadow: rgba(0, 0, 0, 0.24) 1px 2px 3px;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ul li {
        list-style: none;
        user-select: none;
        padding: 9px 8px 9px 27px;
        position: relative;
        font-size: 17px;
        font-weight: 500;
        color: #3D455C;
    }

    ul li::before {
        content: '';
        position: absolute;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background-image: url("./assets/radio.png");
        background-size: cover;
        background-position: center;
        background-size: 20px;
        left: 8px;
        top: 8px;
    }

    ul li.checked {
        color: #555;
        text-decoration: line-through;
    }

    ul li.checked::before {
        background-size: 20px;
        background-image: url("./assets/checked.png");
        background-size: 20px;
    }

    ul li span {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 20px;
        color: #555;
        width: 40px;
        height: 40px;
        line-height: 40px;
    }
`;

styleElement.appendChild(document.createTextNode(cssRules));

document.head.appendChild(styleElement);

const textBox = document.getElementById('textBox');
const listContainer = document.getElementById('listContainer');

function addTask() {
	if (textBox.value == '') {
		alert('Enter any tasks!')
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