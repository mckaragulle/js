"use strict";
/**
 * 1. Döngünün içerisinde let anahtar kelimesi ile tanımlanan değişken kapsam geçerliliği sebebi ile döngünün dışından çağırılamaz.
 * "x" is not defined hatası verir.
 */
for (let index = 0; index < 10; index++) {
    console.log(index);
}
//console.log(index);

/**
 * 2. Döngünün dışından let anahtar kelimesi ile tanımlanan değişken döngü içerisinde de var ile tanımlanmış gibi davranır.
 * Döngünün ilk bölümünde let ile aynı değişkene farklı bir değer atanırsa başta kullanılan değişken değeri döngüye girmez.
 * Döngü dışında ekrana yazdırılan değer döngüden önce atanan değerdir.
 */
let a = 0;
for (let a = 5; a < 10; a++) {
    console.log(a);
}

console.log(a);

/**
 * 3. Özet
Bu konuda 3 farklı döngü işlendi:

while – Her tekerrürden önce koşul kontrol edilir
do..while – Koşul tekerrürden sonra kontrol edilir.
for (;;) – Her tekerrürden önce koşul kontrol edilir. Farklı seçenekler mevcuttur.
Sonsuz döngü yapmak için genelde while(true) kullanılır. Böyle döngüler de diğerleri gibi break talimatıyla kırılabilir.

Eğer o anki tekerrür ile işimiz bitti ve bir sonrakine geçmek istiyorsanız continue kullanmanız lazım.

break/continue ile döngüden önce yazılan etikete atlamak veya üst döngüyü kırmak mümkündür.
 */