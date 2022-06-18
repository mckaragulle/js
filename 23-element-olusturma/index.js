'use strict';

const li = document.createElement('li');
li.className = 'list-group-item list-group-item-secondary';
li.setAttribute('title', 'text');

const text = document.createTextNode('6');
li.appendChild(text)

const a = document.createElement('a');
a.setAttribute('href', '#');
a.className = 'delete-item float-right';
a.innerHTML = '<i class="fas fa-times"></i>';

li.appendChild(a);

document.querySelector('#ul').appendChild(li)