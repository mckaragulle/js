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

/**
 * Referans ile kopyalama
 * Objeler ile ilkel tipler (karakter dizisi, sayı, boolean vs.) arasındaki temel fark 
 * objelerin saklanması ve kopyalanması “referans” ile olur.
 * Fakat ilkel tipler tamamen kopyalanır.
 */

let mesaj = "Merhaba!";
let karsilama = mesaj;

/**
 * Sonuç olarak birbirinden bağımsız iki değişken de "Merhaba!" değerini tutar.
 */

/**
 * Obje değişkeni objenin kendisini değil hafızadaki adresini tutar. 
 * Diğer bir deyişle referansını tutar.
 */
let kullanici = {
    isim: "Mümtaz"
};
/**
 * Obje hafızada herhangi bir yerde saklandı ve kullanici değişkeni buna “referans” oldu.
 * Obje değişkeni kopyalandığında aslında objenin referansı kopyalanır, 
 * hafızadaki obje kopyalanmaz.
 * Yine objeyi bir dolap olarak düşünürseniz değişken bu dolabın anahtarıdır. 
 * Kopyaladığınız zaman dolabı değil de anahtarı kopyalamış olursunuz.
 * Örneğin:
 */
let kullanici = { isim: "Mümtaz" };
let yonetici = kullanici; // referansı kopyalar.

yonetici.isim = 'İhsan'; // yonetici referansı kullanılarak değiştirildi.
console.log(kullanici.isim); // 'İhsan', değişikliği kullanici referansında da etkili oldu. `Mümtaz` değişerek `İhsan` oldu.

/**
 * Referansların karşılaştırılması
 * Eşitlik == ve sıkı eşitlik === operatörleri aynı şekilde çalışmaktadır.
 * İki obje anca aynı objeler ise eşittir.
 * Örneğin iki değişken aynı objeyi referans alırsa bu durumda eşit olurlar:
 */
let a = {};
let b = a; // referansı kopyala

console.log(a == b); // true, iki değişken de aynı objeyi referans almaktadır.
console.log(a === b); // true

/**
 * İki tane farklı objenin nasıl davrandığına bakılırsa:
 */
let a = {};
let b = {}; // iki tane bağımsız obje

alert(a == b); // false