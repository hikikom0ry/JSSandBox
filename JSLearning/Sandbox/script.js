'use strict';

const box = document.querySelector('.box');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

document.querySelector('button').addEventListener('click', () => {
    
});


