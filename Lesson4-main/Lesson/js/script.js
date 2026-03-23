//функції

// function showMessage() {
//     console.log("Hello");
// }

// showMessage(); // виклик функції




// параметри і аргументи (функция Деклерейшн)

// function showMessage(name, city) {
//     console.log("Hello, my name is "+ name + " I`m from "+ city);
// }

// showMessage("Roman", "Kyiv");
// showMessage("Olya", "Chernihiv");




// функция Експрейшн

// const sayHi = function () {
//     console.log("Hi");
// }

// sayHi();




//локальні зміни

// const sayHi = function () {
//     let message = "Hello, my name Roman";
//     console.log(message);
// }

// sayHi();




// глобальні зміни

// const userName = "Ann";

// const sayHi = function () {
//     let message = "Hello, my name ";
//     console.log(message + userName);
// }

// sayHi();





// повернення значень функцій

// function sum(a, b) {
//     return a + b;
// }

// let result = sum (7,8);
// console.log(result);





// const testFunk = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b);
// }

// testFunk(5, 8);



//  const testFunk = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b);
//     //  c = a + b;

//     //  return c;
// }

// testFunk(5, 8);







//порядок виконання коду

// const a = function () {
//     c();
//     console.log("function a");
//     b();
// };

// const b = function () {
//     console.log("function b");
// };

// const c = function () {
//     console.log("function c");
// };

// a()





// аргументи і rest

const addName = function () {
    const arg = Array.from(arguments);
    console.log(arguments);
    console.log(arg);
}

addName(1, 3, 5);





// const addName = function (...arg) {
//     console.log(arg);
// }

// addName(1, 3, 5);




// callback


// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// function showOk() {
//     console.log("You say ok");
// }

// function showCancell() {
//     console.log("You say No");
// }

// ask("Yes or no?", showOk, showCancell);





// hof (hider onde function)

// const hello = function (name) {
//     console.log(`Hello, ${name}`);
// }

// const searchName = function (callback) {
//     const name = "Ivan";
//     callback(name);
// }

// searchName(hello);
// hello("Ann");






// Задачи на практику

// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello");
//     } //else {
//         return console.log("Good bye");
//     //}
// }
// checkAge(5);




// function showMovie(age) {
//     if (age < 21) {
//         return
//     }
//     return console.log("Go to movie!");
// }

// showMovie(22);



// стрілочні функції


// const test = () => { }; // схема

// const test = (arg) => {
//     console.log(arg);
// }

// test("hello");



// Задачки на стрелочные функции

// const showMovie = (age) => {
//     if (age > 21) {
//         return console.log("Hello");
//     }
//     return console.log("Bye!");
// }

// showMovie(12);



//Контексти і виклики

// const a = () => {
//     console.log("a");
// }

// const b = () => {
//     console.log("b");
// }

// const c = () => {
//     console.log("c");
//     a();
//     b();
// }

// b();
// c();
// a();








// console.log(document);

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener('click', () => {
//     console.log(numberRef.value);
// });







// const addNumber = (number) => {
//     let summ = Number(number)+10
//     return console.log(summ)
// }

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", ()=> addNumber(numberRef.value));