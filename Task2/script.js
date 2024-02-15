const inp = document.getElementById("input-box");
const list = document.getElementById("list");
const del = document.getElementById("delbtn");
const counter = document.querySelector('.buttons p span');
const addButton = document.querySelector('.button1');

addButton.addEventListener("click", addTask);

inp.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inp.value == '') {
        alert("Empty!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inp.value = "";
    updateCounter();
    save();
}

del.addEventListener("click", function () {
    list.innerHTML = ""; 
    updateCounter();
    save();
}, false);

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        updateCounter();
        save();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateCounter();
        save();
    }
}, false);

function updateCounter() {
    const totalTasks = list.children.length;
    counter.textContent = totalTasks;
}

function save() {
    localStorage.setItem("data", list.innerHTML);
}

function show() {
    list.innerHTML = localStorage.getItem("data");
    updateCounter();
}
show();