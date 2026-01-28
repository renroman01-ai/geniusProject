//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let result = fruts.map((item) => item.name);
// console.log(result);


//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }


//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.log( `цифра ${i}!` );
//   }



// let i = -1;

// while (i < 4) {
//   i++;
// console.log( `цифра ${i}!` );
// }


//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.




const Limit = 100;
let value; 

do {
    value = prompt("Введіть число більше " + Limit);
} while (Number(value) <= Limit);

console.log("Правильно!", value);













//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];


// let result = girls.map((item) => item.age);
// // console.log(result);

// let final = result.reduce((summ, item) => summ + item);
// // console.log(final);

// console.log(final / girls.length);

//------------------------------------------------------------------
// console.log((result[0]+result[1]+result[2]+result[3])/result);
//------------------------------------------------------------------



