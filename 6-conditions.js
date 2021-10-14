"use strict";
/**
 * 1. String tipindeki kelimelerde karşılaştırma.
 */
console.log("\n1.1. Z > A => " + ("Z" > "A"));
console.log("1.2. Kum > Kan => " + ("Kum" > "Kan"));
console.log("1.3. Bee > Be => " + ("Bee" > "Be"));

/**
 * 2. Karşılatırma işlemlerinde String operandalar Number tipine çevrilerek işleme alınır.
 */
console.log("\n2. '2' > 1 => " + ('2' > 1));

/**
 * 3. Boolean tipindeki operandlar için karşılaştırma yaparken
 * true 1 olarak false 0 alarak işleme alınır.
 */

console.log("\n3.1. true === 1 => " + (true === 1));
console.log("3.2. false === 0 => " + (false === 0));
console.log("3.3. true == 1 => " + (true == 1));
console.log("3.4. false == 0 => " + (false == 0));

/**
 * 4. Özel Durum '' ifadesi 0 kabul edilerek işleme alınır.
 */
console.log("\n4.1. '' == false => " + ('' == false));

/**
 * 5. null === undefined karşılaştırması
 */
console.log("\n5.1. null === undefined => " + (null === undefined));
console.log("5.2. null == undefined => " + (null == undefined));

/**
 * 6. Matematiksel karşılaştırmalar için < > <= >= null/undefined sayıya çevrilirler. 
 * null 0 olurken undefined NaN( not a number ) olur.
 * Matematiksel olarak yukarıda gördüğünüz örnekler imkansız. En sondaki örneğe bakarsanız 0’a eşit veya büyüklük durumunu kontrol ediyor. Eğer en alttaki doğru ise üsttekilerden en az birisinin doğru olması zorunludur. Fakat ikisi de yanlış.

Bunun nedeni eşitlik kontrolü == ve karşılaştırma kontrollerinin > < >= <= farklı çalışmasından dolayıdır. Karşılaştırma iki tarafta bulunan değerleri önce sayıya çevirmeye çalışır. Bundan dolayı sonuncu örnekte null>=0 null 0 a dönüşür. En üst örnekte de null>0 bunu şekilde çalışır. Bundan dolayı en üstte false, en altta ise true döner.

Diğer bir taraftan eşitlik kontrolü ==, undefinedve nulliçin kurala göre bir değişikliğe uğramaz. Sadece birbirleri arasında (undefined ile null) eşitliğe sahiptirler. Diğer türlü hiç birşeye eşit değildirler. Bundan dolayı null == 0 false olur.
 */
 console.log("\n6.1. null > 0 => " + (null > 0));
 console.log("6.2. null == 0 => " + (null == 0));
 console.log("6.3. null < 0 => " + (null < 0));
 console.log("6.4. null >= 0 => " + (null >= 0));
 console.log("6.5. null <= 0 => " + (null <= 0));
 