//1// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let num = 5; // рабоатет только нужно менять вручную!

// if (num > 0) {
//   console.log("true");
// } else { 
//   console.log("false");
// }


// const min = prompt("ВВведіть число");  ////// почему с min рабоатет а с num нет??????

// if (min >= 0 ) {
//     console.log("true");
// } else if (min <0 ) {
//     console.log("false");
// }


//2// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true


// let x = 'qwerty';
// console.log(x === 'test');

// let y = 'test';
// console.log(y === 'test');


//3// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let x = 11;
// if (x >= 10) {
//     console.log(x-5)
// } else if (x < 10) {
//     console.log(x+5)
// }


//4//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу


// const isConfirm = (Number.parseInt(Math.random() * (12 - 1) + 1));
// console.log(isConfirm); 

// if (isConfirm == 1) {
//     console.log("Januar"); 
// } else if (isConfirm == 2) {
//     console.log("Februar");
// }else if (isConfirm == 3) {
//     console.log("Mart");
// }else if (isConfirm == 4) {
//     console.log("April");
// }else if (isConfirm == 5) {
//     console.log("May");
// }else if (isConfirm == 6) {
//     console.log("Juny");
// }else if (isConfirm == 7) {
//     console.log("July");
// }else if (isConfirm == 8) {
//     console.log("August");
// }else if (isConfirm == 9) {
//     console.log("September");
// }else if (isConfirm == 10) {
//     console.log("October");
// }else if (isConfirm == 11) {
//     console.log("November");
// }else if (isConfirm == 12) {
//     console.log("December");
// }



// const monthNumber = Number.parseInt(Math.random() * (12 - 1) + 1);
// console.log("Число:", monthNumber);

// switch (monthNumber) {
//     case 1: console.log("Januar"); break;
//     case 2: console.log("Februaar"); break;
//     case 3: console.log("Mart"); break;
//     case 4: console.log("April"); break;
//     case 5: console.log("May"); break;
//     case 6: console.log("June"); break;
//     case 7: console.log("July"); break;
//     case 8: console.log("August"); break;
//     case 9: console.log("September"); break;
//     case 10: console.log("October"); break;
//     case 11: console.log("November"); break;
//     case 12: console.log("December"); break;
//     default: console.log("Unknown month");
// }



//5//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

//-----------------------------------------------------------------

// const isConfirm = (Number.parseInt(Math.random() * (999 - 100) + 100));
// console.log("Число:", isConfirm);

// const str = String(isConfirm);
// const sum = Number(str[0]) + Number(str[1]) + Number(str[2]);

// console.log("Сума цифр", sum); 

//---------------------------------------------------------------





// const randomNumber = (Number.parseInt(Math.random() * (999 - 100) + 100));
// console.log("Число:", randomNumber);

// let num = randomNumber; 

// const x3 = num % 10;
// num = Math.floor(num / 10);

// console.log(x3);

// const x2 = num % 10;
// const x1 = Math.floor(num / 10);

// console.log(x2);
// console.log(x1);

// console.log(x1 + x2 + x3);