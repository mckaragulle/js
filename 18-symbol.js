"use strict";

/**
 * Obje Tanımında Semboller
 * Eğer obje tanımlanırken sembol doğrudan yazılmak istenirse, köşeli parantez gerekmektedir.
 * Aşağıdaki Gibi:
 */

let id = Symbol("id");

let kullanici = {
    isim: "Mahsun",
    [id]: 123 // dikkat ederseniz id:123 değil
};
/**
 * Böyle yazılmasının nedeni, id değişkeninin ismi değil değerinin istenmesidir, bu değer karakter dizisi değildir.
 */

/**
 * Semboller for…in’de pas geçilir.
 * Obje içindeki semboller obje döngüsü içinde pas geçilir.
 * Örneğin:
 */
let id2 = Symbol("id");
let kullanici2 = {
    isim: "John",
    yas: 30,
    [id2]: 123
};

for (let key in kullanici2) alert(key); // isim, yas, (sembol yok)

// Sembole doğrudan aşağıdaki gibi erişilebilir.
console.log("Doğrudan: " + kullanici2[id]);
/**
 * Bu da “gizleme” konseptine dahildir. 
 * Diğer bir kütüphane veya kod parçası yanlışlıkla bizim gizlediğimiz bir özelliğin üzerine yazmasın diye.
 * 
 * Buna karşın Object.assign hem karakter değerlerini hem de sembolleri kopyalar:
 */

let id3 = Symbol("id");
let kullanici3 = {
    [id]: 123
};

let klon = Object.assign({}, kullanici3);

console.log(klon[id]); // 123
/**
 * Burada problem yoktur. Dizaynında. Amaç yeni bir obje yaratıp istenilen objenin 
 * tüm alanlarının bu yeni objeye kopyalanmasından ibarettir. 
 * Buna elbette id alanı da dahildir.
 */