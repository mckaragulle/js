'use strict';

function startFunction() {
    otherFunction();
    console.log("İşlem Bitti.");
}

function otherFunction() {
    let i = 0;
    while (i < 10E9) {
        i++
    }
    console.log("Döngü Bitti");
}

startFunction();