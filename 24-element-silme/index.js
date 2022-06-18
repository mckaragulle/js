let list = document.querySelector('#ul');
// list.remove();

/**
 * Aşağıdaki 3 komutta aynı işlemi yapar.
 */
// list.childNodes[3].remove();
// list.children[3].remove();
list.removeChild(list.children[3]);


/**
 * Attribute silme
 */
// list.children[0].removeAttribute('class');

// for (let i = 0; i < list.children.length; i++) {
//     const e = list.children[i];
//     e.removeAttribute('class');
// }

console.log(list);