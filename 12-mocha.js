"use strict";
describe("Üs Alma:", function() {
    /**
     * Test çalışmadan önce 1 kere çalışır.
     */
    before(() => console.log("\n\t***Test Başlıyor.***\n\t "));
    /**
     * Test bittikten sonra 1 kere çalışır.
     */
    after(() => console.log("\n\t***Test Bitti.***\n\t "));
    /**
     * Her it()'den önce 1 kere çalışır.
     */
    beforeEach(() => console.log("\nTestten Önce"));
    /**
     * Her it()'den sonra 1 kere çalışır.
     */
    afterEach(() => console.log("Testen Sonra\n\t "));

    describe("x'in n. kuvvetini alır.", function() {
        function test(x) {
            let sonuc = x * x * x;
            it(`${x} in 3. kuvveti = ${sonuc}`, function() {
                assert.equal(us(x, 3), sonuc);
                console.log(`${x} Bu da çalıştı.`);
            })

        }
        for (let i = 1; i <= 10; i++) {
            test(i);
        }
        it("before/after/beforeEach/afterEach", () => console.log("Örnek Kod bloğu2"));
    });
    describe("Örnek", function() {
        it("Diğer it örneği", () => console.log("Örnek it 2 bloğu"));
    });


});