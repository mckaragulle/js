"use strict";

/**
 * Özellik değeri kısaltması
 * Kod yazarken genelde var olan değişkenleri özelliklere isim olarak atarız.
 */
function kullaniciOlustur(isim, yas) {
    return {
        isim: isim,
        yas: yas
            // ...diğer özellikler
    };
}

let kullanici = kullaniciOlustur("Mazlum", 30);
console.log(kullanici.isim); // Mazlum

/**
 * Yukarıdaki örnekte özellikler değişkenler ile aynı isme sahipler. 
 * Bu çeşit kullanım çok yaygındır, hatta bundan dolayı kısaltma bile yapılmıştır. 
 * isim:isim yazmak yerine sadece isim yazılabilir:
 */

function kullaniciOlustur2(isim, yas) {
    return {
        isim, //  isim: isim ile aynı
        yas // yas: yas ile aynı
        // ...
    };
}
let kullanici2 = kullaniciOlustur2("Mazlum", 30);
console.log(kullanici2.isim); // Mazlum

/**
 * Aynı obje içerisinde kısaltma ve normal versiyonu kullanılabilir:
 */
let kullanici3 = {
    isim, // isim:isim ile aynı.
    yas: 30
};

/**
 * Varlık kontrolü
 * Bir objedeki her özellik erişilebilirdir. 
 * Eğer o özellik olmasa bile hata vemez!!! Olmayan bir özelliğe ulaşmaya çalıştığınızda undefined değeri döner. 
 * Bu da kolayca o özelliğin olup olmadığını kontrol etmenizi sağlar.
 */

let kullanici4 = {};

console.log(kullanici4.olmayanOzellik === undefined); // true "böyle bir özellik yok" demektir.

/**
 * Ayrıca bunu kontrol için "in" operatörü de kullanılabilir.
 * Yazımı: "anahtar" in obje
 */

let kullanici5 = { isim: "Mazlum", yas: 30 };

alert("yas" in kullanici5); // true, kullanici.age özelliği mevcut.
alert("blabla" in kullanici5); // false, kullanici.blabla namevcut.

/**
 * Yazıma dikkat ederseniz in in sol tarafında özellik ismi tırnak içinde yazılır.
 * Eğer tırnağı unutursanız bu durumda değişkenin değerini obje içinde arar. 
 * Halbuki bizim amacımız değişkenin isminin obje içinde aramaktır.
 */

let kullanici6 = { yas: 30 };

let anahtar = "yas";
alert(anahtar in kullanici6); // true, değişkenden değerini alır ve kontrol eder.

/**
 * Eğer özellik undefined döndürüyorsa nasıl kontrol edilmelidir?
 * Genelde sıkı karşılaştırma "=== undefined" doğru çalışır. 
 * Fakat burada özel bir durum mevcuttur ve sıkı karşılaştırma da başarısız olur. Bu durumda bile "in" doğru çalışır.
 * Bu olay objenin özelliğinin var olduğu fakat undefined döndürdüğü durumlarda meydana gelir.
 */

let kullanici7 = {
    test: undefined
};

alert(kullanici7.test); // undefined - yani böyle bir özellik yok mu?

alert("test" in kullanici7); // true, özellik mevcut!

/**
 * Yukarıdaki örnekte obj.test teknik olarak mevcut. 
 * Bundan dolayı in operatörü doğru bir şekilde çalışır.
 * Bu türde olaylar çok nadir yaşanır, çünkü bir özelliğe neredeyse kimse undefined atamaz. 
 * Genelde bilinmeyen için null veya boş değer kullanılır. 
 * Bundan dolayı in operatörü kodda yabancı görünür.
 */