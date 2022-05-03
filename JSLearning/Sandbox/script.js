'use strict';

const box = document.querySelector('.box');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

document.querySelector('button').addEventListener('click', () => {
    // box.style.height = height + 'px';
    // console.log(box.scrollTop);
    console.log(document.documentElement.clientWidth);
    
});

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style.display);

// console.log(document.documentElement.clientWidth);