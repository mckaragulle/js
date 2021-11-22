"use strict";

/**
 * Obje olmadan çağırma: this == undefined
 * Aslında fonksiyonu obje olmadan da çağırmak mümkündür.
 */

function selamVer() {
    console.log(this);
}

selamVer(); // tanımsız

/**
 * Sıkı modda this undefined döndürür. Eğer this.isim yazılırsa hata verir.
 * Normal modda ise ( use strict unutulursa) this değeri global obje olur. Tarayıcı için bu windowdur. 
 * Bu konuya daha sonra değinilecektir.
 * 
 * Obje olmadan this çağırmak normal değildir, bir programlama hatasıdır. 
 * Eğer fonksiyon this içeriyorsa, o objenin dahilinde çağırılabileceği anlamı çıkar.
 */

/**
 * Sınırsız this kullanmanın yan etkileri
 * 
 * Diğer programlama dillerinden geliyorsanız, "bağımlı this" kullanımına alışmış olmalısınız. 
 * Metod içerisinde kullanılan this her zaman o objeye referans olur.
 * 
 * JavaScript’te this bağımsızdır. Değeri çalışma anında belirlenir, 
 * hangi metodda yazıldığı önemli değildir, önemli olan “noktadan önceki” objedir.
 * 
 * Çalışma anında this kullanılabilmesinin artıları ve eksileri vardır. 
 * Bir taraftan fonksiyonlar diğer objelerde de kullanılabilirken, 
 * diğer yönden bu kadar esneklik hatalara neden olabilmektedir.
 * 
 * Burada amacımız programlama dilininin dizaynının kötü veya iyiliği değildir. Amaç nasıl çalıştığını anlayıp, 
 * nerelerde yarar nerelerde zarar getirileceğini bilmektir.
 */

/**
 * Özet
 * Objeler içerisinde saklanan fonksiyonlara “metod” denir.
 * Metodlar objelerin obje.biseylerYap() seklinde çalışabilmesini sağlar.
 * Metodlar objelere this şekline referans verebilir.
 * this'in değeri çalışma zamanında tanımlanır.
 * 
 * Fonksiyon tanımlanırken this kullanabilir, fakat this bu metod çalışmadığı müddetçe bir anlam ifade etmez.
 * O fonksiyon objeler arasında kopyalanabilir.
 * Fonksiyon metod yazım şekliyle çağırıldığında obje.metod(), this'in değeri bu çağrı boyunca obje'dir.
 * Ok fonksiyonlarında this bulunmamaktadır. Eğer bu fonksiyonlar içerisinde this çağırılırsa bunun değeri dışarıdan alınır.
 */