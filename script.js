// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3^3 степени

const getCubeOfNumber = (baseNumber) => Math.pow(baseNumber, 3);
console.log(getCubeOfNumber(2) + getCubeOfNumber(3));

//Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let userSalary = Number(prompt("Введите размер зарплаты до налогов"));

const getClearSalarySize = (salary) =>
  console.log(
    `Размер заработной платы после вычета налогов равен ${salary * 0.87}`
  );

userSalary > 0
  ? getClearSalarySize(userSalary)
  : console.log("Значение зарплаты задано неверно");

//   Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let number1 = Number(prompt("Введите первое число"));
let number2 = Number(prompt("Введите второе число"));
let number3 = Number(prompt("Введите третье число"));

const getMaxNumber = (number1, number2, number3) => {
  let maxNumber = number1;
  if (number2 > maxNumber) {maxNumber = number2;}
  if (number3 > maxNumber) {maxNumber = number3;}
  return maxNumber;
};

console.log(
  `Максимальное число из введенных цифр (${number1}, ${number2}, ${number3}) - это ${getMaxNumber(
    number1, number2, number3)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const getSumNumbers = (number1, number2) => number1 + number2;

const getSubtractNumbers = (number1, number2) =>
  number1 > number2 ? number1 - number2 : number2 - number1;

const getMultipleNumbers = (number1, number2) => number1 * number2;

const getDivideNumbers = (number1, number2) =>
  number1 > number2 ? number1 / number2 : number2 / number1;

console.log(getSumNumbers(2, 6));
console.log(getSubtractNumbers(2, 6));
console.log(getMultipleNumbers(2, 6));
console.log(getDivideNumbers(2, 6));
