'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// Перебираем каждый элемент из коллекции boxesQuery
boxesQuery.forEach(box => {
    // Проверяем, соответствует ли текущий элемент селектору .this
    if (box.matches('.this')) {
        // Если элемент имеет класс .this, выводим его в консоль
        console.log(box);
    }
});

console.log(boxesQuery[0].closest('.wrapper')); // Ищем ближайший родительский элемент с классом .wrapper для первого элемента в коллекции boxesQuery


// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxesQuery); // static collection - статичная коллекция
// console.log(boxesGet); // live collection - живая коллекция
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));