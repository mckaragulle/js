/**
 * 21. Video
 */
let idHeader = document.querySelector("#header").innerHTML;
let classHeader = document.querySelector(".header").innerHTML

let classAll = document.querySelectorAll(".header");

for (const iterator of classAll) {
    console.log(iterator.innerHTML);
}

console.log(classAll);

document.querySelector("li").style.color = "red";
document.querySelector("li:nth-child(2)").style.color = "green";
let li = document.querySelector("li:nth-child(3)");
li.textContent = "Metin değiştirildi."
li.style.fontSize = "30px";
document.querySelector("li:last-child").style.color = "blue";