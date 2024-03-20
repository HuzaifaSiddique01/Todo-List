var input = document.getElementById("todoInput");
var list = document.getElementById("list");

function add() {
    if (input.value !== "") {
        list.innerHTML += `<li onclick="remove(this)">${input.value}</li>`;
        input.value = "";
    }else {
        alert("Please add your tasks !")
    }
}

function remove(eleme) {
    eleme.style.display = "none";
}