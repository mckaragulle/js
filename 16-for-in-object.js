"use strict";
let kullanici = {
    isim: "Mazlum",
    yas: 30,
    mazlumuGetirin: true
};

for (let anahtar in kullanici) {
    // anahtarlar
    console.log(anahtar); // isim, yas, mazlumuGetirin
    // anahtarlara göre değerler
    console.log(kullanici[anahtar]); // Mazlum, 30, true
}