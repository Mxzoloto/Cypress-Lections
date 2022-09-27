console.log("Запит даних з серверу ...");

setTimeout(() => {
  console.log("Підготовка відповіді сервера ...");

  const product = {
    name: "laptop",
    price: 10000,
  };

  setTimeout(() => {
    product.status = "inStock";
    console.log(product);
  }, 2000);
}, 3000);

const req = new Promise((resolve, reject) => {});

const req2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Підготовка відповіді сервера ...");

    const product = {
      name: "laptop",
      price: 10000,
    };

    setTimeout(() => {
      product.status = "inStock";
      console.log(product);
    }, 2000);
  }, 3000);
});
let promise = new Promise(function (resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 1000);
});

let promise2 = new Promise(function (resolve, reject) {
  // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// console.log('Запит даних з серверу ...');

const req3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Підготовка відповіді сервера ...");

    const product = {
      name: "laptop",
      price: 10000,
    };

    resolve(product);
  }, 3000);
});

req3.then((product) => {
  setTimeout(() => {
    product.status = "inStock";
    console.log(product);
  }, 2000);
});

// console.log('Запит даних з серверу ...');

// const req3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Підготовка відповіді сервера ...')

//         const product = {
//             name: 'laptop',
//             price: 10000
//         }

//         resolve(product);
//     }, 3000)
// })

// req3.then((laptop) => {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             laptop.status = 'inStock'
//             resolve(laptop)
//         }, 2000)
//     })
// }).then((data) => {
//     data.isModified = true;
//     return data;
// }).then( (data) => {
//     console.log(data)
// })

const req5 = new Promise((resolve, reject) => {
  //....
  //....

  if (errorHappend) {
    reject();
  }
});

req5.catch(() => {
  console.log("Some error happend");
});
