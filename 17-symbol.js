"use strict";
/**
 * Tanım olarak objeler, karakter dizisi veya sembol tipinde olmalıdır. 
 * Sayı veya boolean olamaz. Şimdiye kadar sadece karakter dizisi işlendi. 
 * Bundan sonra semboller nasıl kullanılır ve ne gibi artısı var bunların üzerinden geçilecektir.
 * 
 * Semboller
 * “Symbol” değeri eşsizdir. Symbol() yazılara yeni bir değer yaratılabilir.
 */

let id1 = Symbol();
// id açıklaması "id" olan bir semboldür.
let id2 = Symbol("id");
/**
 * Sembollerin eşsiz oldukları garantidir. Eğer aynı açıklamaya ( sembol ismi ) ait iki sembol olsa bile değerleri farklıdır. 
 * Bu açıklama sadece etikettir. Hiç birşeyi etkilemez.
 * Örneğin aşağıdaki iki sembol aynı açıklamalara aittir – eşit değillerdir.
 */
let id3 = Symbol("id");
let id4 = Symbol("id");

console.log(id3 == id4); // false

/**
 * Semboller doğrudan karakter dizisine çevrilmezler
 * Çoğu değer karakter dizisine çevrilmeyi destekler. 
 * Örneğin, alert neredeyse tüm değerler için çalışır. Symbol ise farklıdır. Doğrudan karakter disizine çevrilemez.
 * Örneğin, Aşağıdaki alert hata verecektir.
 */

let id5 = Symbol("id");
console.log(id5); // Tip Hatası: Sembol karakter dizisine çevirilemez.

/**
 * Eğer sembol’ün değerini göstermek istiyorsanız bu durumda .toString() metodunu çağırmanız gerekir:
 */
let id6 = Symbol("id");
console.log(id6.toString()); // Symbol(id), Şimdi çalışır

/**
 * “Gizli” Özellikler
 * Semboller objelere “gizli” özellikler eklenmesinin yolunu açar, 
 * bunlar vasıtasıyla kodun başka bir bölgesindeki değişiklik var olan objenin üzerine yazamaz.
 * Örneğin, kullanici objesi için “id” özelliği şu şekilde tanımlanabilir:
 */
let kullanici = { isim: "İhsan" };
let id7 = Symbol("id");

kullanici[id7] = "ID değeri";
console.log(kullanici[id7]); //Sembolü bu şekilde anahtar olarak kullanarak kullanici objesine erişilebilir.