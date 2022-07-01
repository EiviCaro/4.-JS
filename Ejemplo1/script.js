console.log("page loaded...");

function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}


function hide(el) {
    el.remove();
}

function message() {
    alert("Ninja was liked!");
}