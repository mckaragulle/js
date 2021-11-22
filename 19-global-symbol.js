"use strict";
/**
 * Global Semboller
 * Görüldüğü üzere semboller her zaman, isimleri aynı olsa bile, birbirinden farklıdır. 
 * Bazı durumlarda aynı isimdeki sembolün aynı anlama gelmesi istenebilir.
 * Örneğin, uygulamanın bir yerinde "id" isminde bir sembol oluşturdunuz, 
 * başka bir yerinde ise aynı bu objeye erişmek istiyorsunuz.
 * 
 * Bunu yapabilmek için global sembol kaydı kullanılabilir. Sembolleri bunun içinde yaratılabilir ve sonra kullanılabilir. 
 * Bu aynı isme sahip sembollerin aynı değeri döndereceğini garantiler.
 * Bu kayıt bölümünden sembolleri okumak için Symbol.for(anahtar) kullanılır.
 * Bu global kayıt bölümünü kontrol eder. Eğer bir sembol anahtar olarak tanımlanmışsa bunu döndürür. 
 * Eğer böyle bir anahtar yok ise Symbol(anahtar) metodu çalışır ve bu yeni anahtar global sembol kaydı bölümüne kaydedilir.
 * 
 * Örneğin:
 */

// Global kayıt bölümünden oku
let id = Symbol.for("id"); // Eğer bu sembol varsa getir yoksa kaydet!

// tekrar oku
let idAgain = Symbol.for("id");

// eskisi ile yenisi aynı mı?
console.log("id === idAgain => " + (id === idAgain)); // true
console.log('Symbol.for("id") => ' + Symbol.for("id").toString());

/**
 * Symbol.keyFor
 * Global semboller için Symbol.for(anahtar) sembolü ismiyle çağırır, bunun tam tersi de mümkündür: 
 * Symbol.keyFor(sym), global sembol ile sembolün ismini dönderir.
 * Örneğin:
 */

let sym = Symbol.for("isim");
let sym2 = Symbol.for("id");

// sembolden ismi al
console.log('Symbol.keyFor(sym) => ' + Symbol.keyFor(sym).toString()); // isim
console.log('Symbol.keyFor(sym2) => ' + Symbol.keyFor(sym2).toString()); // isim

/**
 * Symbol.keyFor sembol kayıt bölümünde bulunan sembolleri aramak için kullanılır. 
 * Bu da global olmayanlarda arama yapılamaz demektir. Eğer sembol global olarak tanımlanamaz ise undefined döndürür.
 * Örneğin:
 */
console.log('Symbol.keyFor(Symbol.for("isim")) => ' + Symbol.keyFor(Symbol.for("isim")).toString()); // isim, global sembol
console.log('Symbol.keyFor(sym) => ' + Symbol.keyFor(sym).toString()); // isim, global sembol
console.log('Symbol.keyFor(Symbol("isim")) => ' + Symbol.keyFor(Symbol("isim"))); // tanımsız, bu argüman sembol kayıtlarında bulunamadı.
console.log('Symbol.keyFor(Symbol("isim2")) => ' + Symbol.keyFor(Symbol("isim2"))); // tanımsız, bu argüman sembol kayıtlarında bulunamadı.