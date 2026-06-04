// Напиши функцию delay(ms), которая возвращает промис, выполняющийся через ms миллисекунд. Затем используй её в цепочке, чтобы вывести 1, потом через секунду 2, потом через секунду 3.

function delay(ms) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), ms);
  })
    .then((res) => {
      console.log(res);
      return new Promise((resolve) => setTimeout(() => resolve(res + 1), 1000));
    })
    .then((res) => {
      console.log(res);
      return new Promise((resolve) => setTimeout(() => resolve(res + 1), 1000));
    })
    .then((res) => {
      console.log(res);
      return new Promise((resolve) => setTimeout(() => resolve(res + 1), 1000));
    });
}

delay(1000);

// Есть такой код с колбэками — перепиши его через цепочку промисов:
// javascriptsetTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 1000);
//     }, 1000);
// }, 1000);
// Должно выводить 1, 2, 3 с паузой в секунду между ними.

function javascriptsetTimeout() {
  let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  promise2
    .then((value) => {
      console.log(value);
      return new Promise((resolve) =>
        setTimeout(() => resolve(value + 1), 1000),
      );
    })
    .then((value) => {
      console.log(value);
      return new Promise((resolve) =>
        setTimeout(() => resolve(value + 1), 1000),
      );
    })
    .then((value) => {
      console.log(value);
      return new Promise((resolve) =>
        setTimeout(() => resolve(value + 1), 1000),
      );
    });
}

javascriptsetTimeout();

const flip = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("орёл") : reject("решка");
});

flip
  .then((res) => console.log("выпало:", res))
  .catch((err) => console.log("выпало:", err));

function greetLater(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`привет, ${name}!`), 1000);
  });
}

greetLater("Иван").then((msg) => console.log(msg));

function checkAge(age) {
  return new Promise((resolve, reject) => {
    age >= 18 ? resolve("доступ разрешён") : reject("слишком молод");
  });
}

checkAge(20).then((msg) => console.log(msg));
checkAge(15).catch((err) => console.log(err));
