"use strict";

let i = 0;

while (i < 10) {
    console.log(i++);
}

while (i != 0) {
    console.log(i--);
}

do {
    console.log(i++);
} while (i < 10)

do {
    console.log(i--);
} while (i > 0)