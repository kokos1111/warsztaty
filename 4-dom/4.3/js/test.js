"use strict";

let wszystkieZgody = document.getElementById('wszystkie-zgody');
let zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
let zgodaMarketingowa2= document.getElementById('zgoda-marketingowa-2');
let formularz = document.getElementById('formularz');
let imieInput = document.getElementById('name');
let emailinput = document.getElementById('email');

wszystkieZgody.addEventListener('change',() =>{
   zgodaMarketingowa1.checked=wszystkieZgody.checked;
   zgodaMarketingowa2.checked=wszystkieZgody.checked;
   zgodaMarketingowa1.disabled=wszystkieZgody.checked;
   zgodaMarketingowa2.disabled=wszystkieZgody.checked;
});

const waliduj = (e) => {
    let saBledy = false;
    if (imieInput.value.trim() ==''){
        console.log('Uzupelnij pole imię i nazwisko');
        saBledy=true;
        
    }
    if (saBledy) {
        e.preventDefault();
    }
    console.log('działa');
}

// formularz.addEventListener('submit',(e) => {
// e.preventDefault();
// console.log('działa');

// });