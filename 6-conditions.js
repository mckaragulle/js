"use strict";
/**
 * 1. String tipindeki kelimelerde karşılaştırma.
 */
console.log("apple" > "pineapple");
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

Diğer bir taraftan eşitlik kontrolü ==, undefined ve null için kurala göre bir değişikliğe uğramaz. Sadece birbirleri arasında (undefined ile null) eşitliğe sahiptirler. Diğer türlü hiç birşeye eşit değildirler. Bundan dolayı null == 0 false olur.
 */
 console.log("\n6.1. null > 0 => " + (null > 0));
 console.log("6.2. null == 0 => " + (null == 0));
 console.log("6.3. null < 0 => " + (null < 0));
 console.log("6.4. null >= 0 => " + (null >= 0));
 console.log("6.5. null <= 0 => " + (null <= 0));
 
 /**
  * 7. (1.) ve (2.) örneklerde false döndü çünkü undefined NaN oldu. Nan özel bir sayısal değişkendir ve hangi sayı ile karşılaştırılırsa karşılaştırılsın, sonuç false çıkar.
(3.) maddedeki eşitlik kontrolü ise undefined'ın sadece null ile eşit olabilmesinden dolayıdır. null haricinde hiç bir değere eşit değildir.
  */
console.log("\n7.1. undefined > 0 => " + (undefined > 0));
console.log("7.2. undefined < 0 => " + (undefined < 0));
console.log("7.3. undefined == 0 => " + (undefined == 0));
console.log("7.4. undefined >= 0 => " + (undefined >= 0));
console.log("7.5. undefined <= 0 => " + (undefined <= 0));

console.log("\n8.1. +undefined => " + +undefined);
console.log("8.1. +null => " + +null);

/**
 * Problemlerden Kaçınma

undefined/null eşitlik kontrollerinde sıkı eşitlik kontrolü === haricinde yaptığınız kontrollere dikkat etmeniz lazım.

>= > < <= gibi karşılaştırmaları null/undefined değeri alabilecek değişkenler ile yapmayın, yaparsanız bile kesinlikle çok dikkatli olun. Eğer bir değişken null/undefined gibi değerler alabiliyorsa bunları ayrıca kontrol etmeniz gerekli.

Özet
Karşılaştırma operatörleri mantıksal değerler döndürür. (true/false) gibi
Karakter dizileri harf harf alfabe sırasına göre kontrol edilir.
Karşılaştırmalarda eğer farklı tipler kullanılıyorsa bunlar sayıya işlem yapılmadan sayıya çevirilir. ( Eğer sıkı eşittir kullanıyorsanız çevirilmez)
null ve undefined eşittir. Bu değerler başka hiç bir değere eşit değildirler.
Değeri null/undefined olabilen bir değişken ile > veya < karşılaştırması yaparken dikkat edin. Ayrı bir null/undefined kontrolü yapmakta fayda var
 */