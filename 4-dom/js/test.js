"use strict"


let paragraf1 = document.getElementById('p1');
let paragraf2 = document.getElementById('p2');
let button = document.getElementById("button");

const ustawTlo = () => {
    paragraf1.style.backgroundColor = "red";
    paragraf2.style.backgroundColor = "yellow";
}
button.addEventListener('click', ustawTlo);




console.log();

