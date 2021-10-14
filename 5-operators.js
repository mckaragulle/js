"use strict";

/**
 * 1. Toplama (+) operatörü string tipindeki operandlarda birleştirme yapar.
 * Number tipindeki operandlarda toplama işlemi yapar.
 * Aşağıdaki işlemin sonucu 510'dur.
 */
 let sayi1 = "5";
 let sayi2 = "10";
console.log("\n1.1. String operanlarda birleştirme = " + sayi1 + sayi2);

/**
 * 2. Aşağıdaki işlemin sonucu 15'tir.
 */
console.log("\n2.1. String'i Number'a çevirme= " + Number(sayi1) + Number(sayi2));

/**
 * 3. Aşağıdaki işlem 2. işlem ile aynı işlemi yaptığı için sonucu 15'tir.
 * Buradaki + işareti unary'dir.
 */
console.log("\n3.1. Unary İşlemi = " + +sayi1 + +sayi2);

/**
 * 4. Üs alma (**)
 */
sayi1 = 7;
sayi2 = 3;
console.log("\n4.1. Üslü Sayılar = " + sayi1 ** sayi2);

/**
 * 5. Karekök alma x ** (y / z)
 * ÖR: 125 ** (1 / 5)
 */

sayi1 = 3125;
sayi2 = 5;
console.log("\n5.1. Köklü sayılar = " +sayi1 ** (1 / sayi2));