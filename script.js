console.log("Задание 1\n");
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <arr.length; i++) {
  if (arr[i] === 0) {
    console.log(`${i} - это ноль`);
  } else if (arr[i] % 2 === 0) {
    console.log(`${i} - это четное число`);
  } else if (arr[i] % 2 === 1) {
    console.log(`${i} - это нечетное число`);
  }
}
console.log("");

console.log("*********************************************************************\n");


console.log("Задание 2\n");
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.splice(3,2);
console.log(arr2);
console.log("");

console.log("*********************************************************************\n");

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
//  и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

console.log("Задание 3\n");

const arr3 = [];
let res = 0;

for (let i = 0; i < 6; i++) {
  arr3[i] = Math.floor(Math.random(0, 9) * 10);
}

for (let i = 0; i < arr3.length; i++) {
  res = res + arr3[i];
}

let min = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] < min) {
    min = arr3[i];
  }
}

let sumReduce = arr3.reduce((accum, value) => {
  return accum + value;
}, 0);

let minMath = Math.min(...arr3);

let fun = function (arr3) {
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === 3) {
        return console.log(`в массиве есть число 3`);
    } 
  } 
   return console.log(`в массиве нет числа 3`);
}

console.log(arr3);
console.log();
console.log(fun(arr3));
console.log();
console.log(`минимальное значение в массиве ${min}`);
console.log(`минимальное значение в массиве через Math.min ${minMath}`);
console.log(`сумма элементов этого массива через reduce ${sumReduce}`);
console.log(`сумма элементов этого массива равна ${res}`);



// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), 
// как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

console.log("");
console.log("*********************************************************************\n");
console.log("Задание *\n");


let char = "x";
let char2 = "x";
for (let i = 0; i <= 20; i++) {
  console.log(char);
  char = char + char2;
}

