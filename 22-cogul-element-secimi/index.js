'use strict';

let val = document.getElementsByClassName('p');

for (let i = 0; i < val.length; i++) {
    const element = val[i];
    console.log(element.innerHTML);
}

val = document.getElementsByTagName('p');

console.log(val[0].attributes.class.value);

let p = document.querySelectorAll('.p');

p.forEach(element => {
    console.log(element.innerHTML);
})

for (const e of p) {
    console.log("\r", e.innerHTML, " => ", e.innerText);
}