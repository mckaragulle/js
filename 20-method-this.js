"use strict";
/**
 * Objeler genelde dünyada var olan şeyler gibidirler, kullanıcılar, emirler, vs.
 */
let kullanici = {
    isim: "İhsan",
    yas: 30
};

/**
 * Kullanıcıların işlem yapma yetenekleri vardır: alışveriş sepeti, giriş, çıkış vs.
 * Bu aksiyonlar Javascript’te özellikler için fonksiyon kullanarak çözülür.
 */
kullanici.selamVer = function() {
    return "Merhaba";
};

console.log(kullanici.selamVer());

/**
 * Tabii ki metodları önceden tanımlanmış fonksiyonlarla da oluşturabilirsiniz. Örneğin:
 */

let kullanici2 = {
    isim: "İhsan",
    yas: 30
};

// önce tanımla
function selamVer() {
    return "Merhaba";
};

// Sonra bunu metod olarak objeye ekle
kullanici2.selamVer = selamVer;

console.log(kullanici2.selamVer());

/**
 * Metod Kısayolu
 * Metodları yaratmak için daha kolay bir kullanım mevcuttur:
 */
// aşağıdaki objeler aynı işleri yapar.

let kullanici3 = {
    selamVer: function() {
        return "Merhaba";
    }
}

let kullanici4 = {
    selamVer() {
        return "Merhaba";
    }
}

/**
 * Yukarıda da gösterildiği gibi "function" pas geçilerek sadece selamVer() yazılabilir.
 * Doğrusunu söylemek gerekirse iki fonksiyonda birbiri ile aynı. 
 * Altta yatan farklılık ise kalıtım ile alakalı ki bu da şimdilik bir sorun teşkil etmiyor. 
 * Çoğu durumda kısa yazım tercih edilmektedir.
 */

/**
 * Metodlarda this kullanımı
 * Obje metodlarının objelerde bulunan diğer bilgilere ulaşması çok büyük bir gerekliliktir. 
 * Örneğin kullanici.selamVer() kullanici ismine ihtiyaç duyar.
 * Objeye ulaşabilmek içim metod this kelimesine ihtiyaç duyar.
 * “noktadan önce” yazılan this o objeye referans verir. 
 * Örneğin
 */

let kullanici5 = {
    isim: "İhsan",
    yas: 30,

    selamVer() {
        return this.isim;
    }

};

console.log(kullanici5.selamVer()); // İhsan

/**
 *  Fakat böyle bir koda güvenilez. Diyelim ki kullanici objesini kopyaladınız ve yonetici = kullanici yaptınız. 
 * Sonra kullanici objesinin üzerine yazdınız bu durumda yanlış objeye erişmiş olacaksınız. 
 * Bir örnekle açıklamak gerekirse:
 */

let kullanici6 = {
    isim: "İhsan",
    yas: 30,

    selamVer() {
        return kullanici6.isim; // hataya neden olur
    }

};


let yonetici = kullanici6;
kullanici6 = null;

console.log(yonetici.selamVer()); // `selamVer()` içerisinde `kullanici` kullanıldığından dolayı hata verecektir.

/**
 * Eğer kullanici.isim yerine this.isim yazmış olsaydınız kod çalışacaktı.
 * “this” bağımsız bir şekilde kullanılabilir.
 * Diğer dillerden farklı olarak “this” kelimesi yer gözetmeksizin kullanılabilir. 
 * Her fonksiyonun içinde kullanılabilir.
 * Aşağıdaki kodda bir yazım hatası yoktur:
 */
let kullanici7 = { isim: "İhsan" };
let yonetici2 = { isim: "Macide" };

function selamVer() {
    return this.isim;
}

// aynı fonksiyonu iki farklı objeye atandı.
kullanici7.f = selamVer;
yonetici2.f = selamVer;

// iki fonksiyon da farklı `this` e sahip.
// "noktadan" önceki "this" objeye referans verir.
kullanici7.f(); // İhsan  (this == kullanici)
yonetici2.f(); // Yonetici  (this == yonetici)

yonetici2['f'](); // Köşeli parantez veya noktalı yazım farketmez, her ikisi de çalışır.