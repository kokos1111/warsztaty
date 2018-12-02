"use strict";


let submit = document.getElementById('formularz').addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Wysłano formularz" );
    let imie = document.getElementsByTagName('input')[0];
    let nazwisko = document.getElementsByTagName('input')[1];
    console.log(imie.value);
    console.log(nazwisko.value);
});



