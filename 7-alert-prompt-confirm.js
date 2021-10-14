"use strict";

/** 
 * 1.Bu ekrana mesaj’ değişkenini çıkarır ve önünüze gelen bu pop-up’da “OK” butonuna basmadan kodda bir sonraki adıma geçilmez.
 * Örneğin:
 */
alert("mesaj");

/**
 * 2. Modal penceresi içerisinde bir yazı ve OK/CANCEL butonlarını içerir.
 * Kullanıcıya gösterilecek yazı.
 * default
 * Opsiyonel bir ikinci parametre, input alanı için varsayılan değeri içerir.
 * Kullanıcı ekrana çıkan veri girişi kutusuna istediğini yazar ve OK tuşuna basar. İsterse bunu CANCEL tuşuna basarak iptal edebilir. Veya Esc tuşu da aynı işlevi görür.
 * Eğer kullanıcı değer girdiyse bunu dönderir, eğer girmediyse ve o ekrandan Esc veya CANCEL butonu ile çıktıysa null dönderir
 * .Örneğin:
 */
let age = prompt('Kaç yaşındasın?', 100);

alert(`Sen ${age} yaşındasın!`); // Sen 100 yaşındasın!

/**
 * İkinci parametre opsiyonel. Fakat eğer bu parametreyi göndermezsek, Internet Explorer veri giriş ekranında "undefined" gösterir.
 * İsterseniz aşağıdaki kodu Internet Explorer’da çalıştırıp görebilirsiniz:
 */
let test = prompt("Test");

/**
 * Bundan dolayı IE’de düzgün görünebilmesi için her zaman boşta olsa bir değer atamak önemli. 
 * Bu arada Edge browser’da bu problem görünmemektedir.
 */
let test = prompt("Test", ''); // <-- for IE

/**
 * 3. confirm fonksiyonu içerisine yazdığımız soru ile OK ve CANCEL butonu olan bir pencere çıkarır.
 * Eğer OK’e basıldıysa true, CANCEL’a basıldıysa false dönderir.
 * Örneğin:
 */
let patron = confirm("Patron musun?");

alert( patron ); // eğer OK'e basıldıysa `true` döner.