'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelectorAll('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';
box.style.cssText = 'background-color: black; width: 500px';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(heart => {
    heart.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('some text');
div.classList.add('black');

// wrapper.removeChild(hearts[1]);
// wrapper.insertBefore(div, hearts[0]);
// wrapper.appendChild(div);
wrapper.append(div);

// div.textContent = 'Hello';
div.innerHTML = '<h1>Hello World</h1>';
// hearts[0].after(div);

// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

