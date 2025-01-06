// Write the code as shown in the video below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';
const heading = document.querySelector('#basket-heading');
heading.style.color = 'brown';
// Write answer to the questions asked below:
const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width='50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const head = document.querySelector('h2');
head.style.marginLeft = '30px';

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.background = 'white';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';
}
const oddItem = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < oddItem.length; i++){
    oddItem[i].style.backgroundColor = 'lightgray';
    
}
const evenItem = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenItem.length; i++) {
    evenItem[i].style.backgroundColor = 'brown';
    evenItem[i].style.color = 'white';
}
