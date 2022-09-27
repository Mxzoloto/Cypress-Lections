/** ЗАВДАННЯ 1
 *
 * 1. Оголосіть змінну та присвойте їй стрілочну функцію
 *
 * 2. У функції не повинно бути параметрів
 *
 * 3. Поверніть з функції рядок "Привіт, світ!"
 *
 * 4. Викличте функцію та виведіть результат у консоль
 *
 */
const hello = () => {
  console.log("Hello, world");
};
hello();
/** ЗАВДАННЯ 2
 *
 * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
 *
 * 2. Використовуйте стрілочну функцію
 */
const hello2 = () => {
  setTimeout(function () {
    console.log("Hello, world");
  }, 5000);
};
hello2();
/** ЗАВДАННЯ 3
 *
 * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
 * - name
 * - surname
 * - favoriteNumber
 *
 * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
 *     створюватиме в ньому додаткове поле age з довільним значенням.
 * Результат роботи функції це вивід у консоль рядка
 * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
 */

//First variant:
let someObject = {
  name: "Max",
  surname: "Zol",
  favoriteNumber: "9",
};
function Object(someObject) {
  (someObject.age = "34"),
    console.log(
      `My name is ${someObject.name} ${someObject.surname}, I'm ${someObject.age} years old and my favorite number is ${someObject.favoriteNumber}`
    );
}
Object(someObject);

//Second variant:
function Object(name, surname, age, favoriteNumber) {
  age,
    console.log(
      `My name is ${name} ${surname}, I'm ${age} years old and my favorite number is ${favoriteNumber}`
    );
}
Object("Max", "Zol", "34", "9");

/** ЗАВДАННЯ 4
 *
 * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
 *
 * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
 *
 * 3. В функції замініть елемент масиву з типом int на інший з типом string
 *
 * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
 */
//First variant:
let array2 = [9, true, "Test"];
const someFunc2 = (array2) => {
  array2[0] = "String";
  return array2;
};
console.log(someFunc2(array2));

//Second variant:
let array = [9, true, "Test"];
const someFunc = (array) => {
  array[0] = "String";
  console.log(array);
};
someFunc(array);

/** ЗАВДАННЯ 5
 *
 * 1. Виправте код щоб обидва вирази (setTimeout та myFn()) працювали.
 *
 * setTimeout(function myFn() {
 * console.log('hello from myFn')
 * }, 2000)
 *
 * myFn()
 */
function myFn() {
  setTimeout(function () {
    console.log("hello from myFn");
  }, 2000);
}
myFn();

/** ЗАВДАННЯ 6
 *
 * 1. Створіть масив із 3 об'єктами "cars"
 *
 * 2. Кожен об'єкт повинен мати три властивості
 * - carBrand (рядок)
 * - price (число)
 * - isAvailableForSale (логічне значення)
 *
 * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
 *
 * 4. В середині функції додайте ще один такий же обʼєкт в масив.
 *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
 *
 * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
 */

let car = [
  {
    carBrand: "Toyota",
    price: 36000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Volkswagen",
    price: 26000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Lada",
    price: 1,
    isAvailableForSale: false,
  },
];
const cars = (car) => {
  car.push(car[0]);
  return car;
};
console.log(cars(car));
/** ЗАВДАННЯ 7
  *
  * 1. Створіть обʼєкт
  *
    const myObject = {
        key1: true,
        key5: 10,
        key3: 'abc',
        key4: null,
        key10: NaN,
     }
  *
  * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
  *
  * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10
  *     то виводьте значення властивості в консоль.
  */
//First variant:
const myObject = {
  key1: true,
  key5: 10,
  key3: "abc",
  key4: null,
  key10: NaN,
};
function someFunc3(myObject) {
  // const someConst = Object.keys(myObject);
  Object.keys(myObject).forEach((value) => {
    if (value === "key3" || value === "key10") {
      console.log(myObject[value]);
    }
  });
}
someFunc3(myObject);

//Second variant:
const myObject2 = {
  key1: true,
  key5: 10,
  key3: "abc",
  key4: null,
  key10: NaN,
};
function someFunc3(myObject2) {
  for (let i in myObject2) {
    if (i === "key3" || i === "key10") {
      console.log(myObject2[i]);
    }
  }
}
someFunc3(myObject2);

/* if (myObject.key3 == key) {
  console.log(myObject.key3);
} else if (myObject.key10 == key) {
  console.log(myObject.key10);
}
/** ЗАВДАННЯ 8
  *
  * 1. Створіть функцію "findProductById" із двома параметрами:
  * - ID товару
  * - масив товарів
  *
  * 2. Функція повинна повернути товар із певним ID
  *
  * 3. Якщо товару з певним ID у масиві товарів немає,
  * функція має повернути "undefined"
  *
  * 4. Також всередині функції виведіть у консоль товар по ID

    const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
 ]

 console.log(findProductById(6134, products)) // { postId: 6134, name: 'tablet' }

 console.log(findProductById(4511, products)) // undefined

 */
const products = [
  {
    productId: 1355,
    name: "phone",
  },
  {
    productId: 5131,
    name: "laptop",
  },
  {
    productId: 6134,
    name: "tablet",
  },
];
function findProductById(productId, products) {
  return products.find((p) => p.productId === productId);
}
console.log(findProductById(6134, products));

/** ЗАВДАННЯ 9
 *
 * 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
 *
 * 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
 *
 * 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
 *
 * 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
 *
 * 5. Якщо масив не відсортований - повернути "Масив не відсортований"
 */

/*  const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */
const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];
function arraySortInfo(inputArray) {
  function isIntegerCallbackFunc(currentValue, index, array) {
    return Number.isInteger(currentValue);
  }
  function isSortedAscCallbackFunc(currentValue, index, array) {
    if (index != 0) {
      return currentValue >= array[index - 1];
    }
    return true;
  }
  function isSortedDescCallbackFunc(currentValue, index, array) {
    if (index != 0) {
      return currentValue <= array[index - 1];
    }
    return true;
  }
  if (!inputArray.every(isIntegerCallbackFunc)) {
    console.log("Деякі елементи не є числами");
  } else if (inputArray.every(isSortedAscCallbackFunc)) {
    console.log("Масив відсортований за зростанням");
  } else if (inputArray.every(isSortedDescCallbackFunc)) {
    console.log("Масив відсортований за спаданням");
  } else {
    console.log("Масив не відсортований");
  }
}
arraySortInfo(a);
arraySortInfo(b);
arraySortInfo(c);
arraySortInfo(d);
/**
 * ПІДКАЗКИ
 *
 * Підказка 1: Використовуйте метод масивів "every"
 * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
 * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
 */
