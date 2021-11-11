"use strict";
/**
 * Boş bir obje tanımladık.
 */
let info = {};
let digerObje = new Object;

/**
 * Objeye yeni değer atama veya değer değiştirme
 */
info.name = "Mustafa";
info.age = "31";
digerObje["adi soyadi"] = "Mustafa KARAGÜLLE";
console.log('info' + info);
console.log('digerObje' + digerObje);

/**
 * typeof kullanımı
 */
console.log('typeof digerObje["adi soyadi"] -> ' + typeof digerObje["adi soyadi"]);
console.log('typeof info["name"] -> ' + typeof info['age']);

/**
 * Objeden değer silme
 */
delete info.name;
console.log(info);

/**
 * JavaScript dili için ayrılmış kelimeler obje içerisinde kullanılabilir.
 * Değişken ismi for,let,return gibi dil için ayrılmış kelimelerden oluşamaz.
 * Fakat obje özellikleri için böyle bir sınırlama yoktur. Değişken her türlü adlandırılabilir.
 */

let obj = {
    for: 1,
    let: 2,
    return: 3
}
console.log(obj.for+obj.let+obj.return); // 6

/** 
 * Temelde tüm isimlere izin verilir, fakat bir tane özel isim vardır.
 * "__proto__" bu özel bir davranış sergiler. Örneğin obje olmayan değeri atayamazsınız.
 */
let obj2 = {};
obj2.__proto__ = 5;
console.log(obj2.__proto__); // [object Object], beklendiği gibi çalışmadı.

let obj3 = {};
obj3.__proto__ = info;
console.log(obj3);