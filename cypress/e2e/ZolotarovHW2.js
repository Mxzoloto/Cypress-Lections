/* 1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних) */

//Variant negative
let hamb = 3,
  potato = 1;
if (hamb >= 4 && potato >= 1) {
  console.log("Ми поїли");
} else {
  console.log("Ми йдемо в інше кафе");
}

//Variant positive
let hamb2 = 4,
  potato2 = 1;
if (hamb2 >= 4 && potato2 >= 1) {
  console.log("Ми поїли");
} else {
  console.log("Ми йдемо в інше кафе");
}
/* 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль. */

let price1 = 1000,
  price2 = 1900,
  price3 = 1900;
if (price3 >= price1 && price3 <= price2) {
  console.log(true);
} else {
  console.log(false);
}

/* 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль. */

//Without "!"
let price4 = 1000,
  price5 = 1900,
  price6 = 2000;
if (price6 <= 1000 || price6 >= 1900) {
  console.log(true);
} else {
  console.log(false);
}
//With "!"
let price7 = 1000,
  price8 = 1900,
  price9 = 2000;
if (!(price9 > 1000 && price9 < 1900)) {
  console.log(true);
} else {
  console.log(false);
}

/* 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

//Variant #1
let season;
season = 4;
if (season == 1) {
  console.log("Winter");
} else if (season == 2) {
  console.log("Spring");
} else if (season == 3) {
  console.log("Summer");
} else if (season == 4) {
  console.log("Autumn");
} else {
  console.log("Error");
}

//Variant #2
for (let i = 1; i <= 4; i++) {
  if (i == 1) {
    console.log("Winter");
  } else if (i == 2) {
    console.log("Spring");
  } else if (i == 3) {
    console.log("Summer");
  } else if (i == 4) {
    console.log("Autumn");
  } else {
    console.log("Error");
  }
}

//Variant #3
let season1 = "Winter",
  season2 = "Spring",
  season3 = "Summer",
  season4 = "Autumn";
for (let i = 1; i <= 4; i++) {
  if (i == 1) {
    console.log(season1);
  } else if (i == 2) {
    console.log(season2);
  } else if (i == 3) {
    console.log(season3);
  } else if (i == 4) {
    console.log(season4);
  } else {
    console.log("Error");
  }
}

/* 5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль. */

//Variant 1
let a, b, c;
a = 80;
b = 85;
c = 82;
if (a > b && a < c) {
  console.log("Average number is a: " + a);
  if (a < b && a > c) {
    console.log("Average number is a: " + a);
  }
} else if (b > a && b < c) {
  console.log("Average number is b: " + b);
  if (b < a && b > c) {
    console.log("Average number is b: " + b);
  }
} else if (c > a && c < b) {
  console.log("Average number is c: " + c);
  if (c < a && c > b) {
    console.log("Average number is c: " + c);
  }
} else {
  console.log("Error");
}

//Variant 2
let d, e, f;
d = 80;
e = 90;
f = 85;
if ((d > e && d < f) || (d < e && d > f)) {
  console.log("Average number is d: " + d);
} else if ((e > d && e < f) || (e < d && e > f)) {
  console.log("Average number is e: " + e);
} else if ((f > d && f < e) || (f < d && f > e)) {
  console.log("Average number is f: " + f);
} else {
  console.log("Error");
}

/* 6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль. */

let day = 5;

switch (day) {
  case 1:
    console.log("Day 1 is Monday");
    break;
  case 2:
    console.log("Day 2 is Tuesday");
    break;
  case 3:
    console.log("Day 3 is Wednesday");
    break;
  case 4:
    console.log("Day 4 is Thursday");
    break;
  case 5:
    console.log("Day 5 is Friday");
    break;
  case 6:
    console.log("Day 6 is Saturday");
    break;
  case 7:
    console.log("Day 7 is Sunday");
    break;
}

/* 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль. */

let num1 = 3,
  num2 = 4,
  operator = "/";
switch (operator) {
  case "+":
    console.log("Result is: " + (num1 + num2));
    break;
  case "-":
    console.log("Result is: " + (num1 - num2));
    break;
  case "*":
    console.log("Result is: " + num1 * num2);
    break;
  case "/":
    console.log("Result is: " + num1 / num2);
    break;
  default:
    console.log("Error");
}

/* 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова. */

let text = "It's the best task";
const updatedText = text.replace(/[aeiou]/gi, "");
console.log(updatedText);

/*  used the g (global) flag because we want to match all occurrences of a vowel in the string and not just the first occurrence.
    The i flag is used to make the search case insensitive. These two regular expressions are the same:
    /[aeiou]/gi
    /[aeiouAEIOU]/g */

/* 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk */

//Пояснение, почему нельзя сделать только один if для кадого случая (число 0.341 метр)
/*
let meter = 0.341;
let km = meter / 1000;
let lastNumberKm = Number(String(km).slice(-1));
let lastNumberM = Number(String(meter).slice(-1));
console.log(" Последняя цифра в метрах -  " + lastNumberM);
console.log(" Последняя цифра в километрах -  " + lastNumberKm);
if (lastNumberKm == 1) {
  if (lastNumberM == 1) {
    console.log(meter + " метр - это " + km + " километр");
  } else {
    console.log("First error");
  }
} else if (lastNumberKm >= 2 && lastNumberKm <= 4) {
  if (lastNumberM >= 2 && lastNumberM <= 4) {
    console.log(meter + " метра - это " + km + " километра");
  } else {
    console.log("Second error");
  }
} else if (lastNumberKm == 0 || (lastNumberKm >= 5 && lastNumberKm <= 9)) {
  if (lastNumberM == 0 || (lastNumberM >= 5 && lastNumberM <= 9)) {
    console.log(meter + " метров - это " + km + " километров");
  } else {
    console.log("Third error");
  }
} else {
  console.log("Невалидные данные");
}
*/

let meter = 0.341;
let km = meter / 1000;
let lastNumberKm = Number(String(km).slice(-1));
let lastNumberM = Number(String(meter).slice(-1));
console.log(" Последняя цифра в метрах -  " + lastNumberM);
console.log(" Последняя цифра в километрах -  " + lastNumberKm);
if (lastNumberKm == 1) {
  if (lastNumberM == 1) {
    console.log(meter + " метр - это " + km + " километр");
  } else if (lastNumberM >= 2 && lastNumberM <= 4) {
    console.log(meter + " метра - это " + km + " километр");
  } else if (lastNumberM == 0 || (lastNumberM >= 5 && lastNumberM <= 9)) {
    console.log(meter + " метров - это " + km + " километр");
  }
} else if (lastNumberKm >= 2 && lastNumberKm <= 4) {
  if (lastNumberM == 1) {
    console.log(meter + " метр - это " + km + " километра");
  } else if (lastNumberM >= 2 && lastNumberM <= 4) {
    console.log(meter + " метра - это " + km + " километра");
  } else if (lastNumberM == 0 || (lastNumberM >= 5 && lastNumberM <= 9)) {
    console.log(meter + " метров - это " + km + " километра");
  }
} else if (lastNumberKm == 0 || (lastNumberKm >= 5 && lastNumberKm <= 9)) {
  if (lastNumberM == 1) {
    console.log(meter + " метр - это " + km + " километров");
  } else if (lastNumberM >= 2 && lastNumberM <= 4) {
    console.log(meter + " метра - это " + km + " километров");
  } else if (lastNumberM == 0 || (lastNumberM >= 5 && lastNumberM <= 9)) {
    console.log(meter + " метров - это " + km + " километров");
  }
} else {
  console.log("Невалидные данные");
}
