/* 1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних) */

//Variant negative
function McDonalds(hamb, potato) {
  if (hamb >= 4 && potato >= 1) {
    console.log("Ми поїли");
  } else {
    console.log("Ми йдемо в інше кафе");
  }
}
McDonalds(3, 1);

//Variant positive
function McDonalds(hamb, potato) {
  if (hamb >= 4 && potato >= 1) {
    console.log("Ми поїли");
  } else {
    console.log("Ми йдемо в інше кафе");
  }
}
McDonalds(4, 1);
/* 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль. */

function Price(price1, price2, price3) {
  if (price3 >= price1 && price3 <= price2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
Price(1000, 1900, 1900);

/* 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль. */

//Without "!"
function Price(price1, price2, price3) {
  if (price3 <= price1 || price3 >= price2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
Price(1000, 1900, 2000);

//With "!"
function Price(price1, price2, price3) {
  if (!(price3 > price1 && price3 < price2)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
Price(1000, 1900, 2000);
/* 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

//Variant #1
function Season(season) {
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
}
Season(4);

//Variant #2
function Season() {
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
}
Season();
//Variant #3
function Season() {
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
}
Season();

/* 5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль. */

//Variant 1
function Average(a, b, c) {
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
}
Average(85, 90, 87);

//Variant 2
function Average(d, e, f) {
  if ((d > e && d < f) || (d < e && d > f)) {
    console.log("Average number is d: " + d);
  } else if ((e > d && e < f) || (e < d && e > f)) {
    console.log("Average number is e: " + e);
  } else if ((f > d && f < e) || (f < d && f > e)) {
    console.log("Average number is f: " + f);
  } else {
    console.log("Error");
  }
}
Average(92, 90, 95);

/* 6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль. */

function Day(day) {
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
}
Day(7);

/* 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль. */
function Operator(num1, num2, operator) {
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
}
Operator(3, 4, "/");

/* 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова. */
function Text(text) {
  const updatedText = text.replace(/[aeiou]/gi, "");
  console.log(updatedText);
}
Text("It's the best task");

/*  used the g (global) flag because we want to match all occurrences of a vowel in the string and not just the first occurrence.
    The i flag is used to make the search case insensitive. These two regular expressions are the same:
    /[aeiou]/gi
    /[aeiouAEIOU]/g */

/* 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk */

function Distance(meter) {
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
}
Distance(0.341);
