'use strict';

function startFunction(){
    otherFunction();
    console.log("İşlem Tamamlandı.");
}

function otherFunction(){
    setTimeout(function(){
        let i = 0;
        while(i < 10e9){
            i++
        }
        console.log("Döngü Bitti.");
    }, 0);
}
startFunction();