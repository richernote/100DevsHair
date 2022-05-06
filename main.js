let menu = document.querySelector('#menu-button');
let dropdown = document.querySelector('nav');

let disClose = document.querySelector('.dis-close');
let dis = document.querySelector('#discount-book');

menu.addEventListener('click', peekABoo);
disClose.addEventListener('click', close);

function peekABoo() {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "inline-block";
    } else {
        dropdown.style.display = "none";
    }
}

function close() {
    dis.style.display = "none";
}
