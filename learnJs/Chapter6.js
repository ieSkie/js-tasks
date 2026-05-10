//6.2
function filterByType(type, ...rest) {
  const arr = [];
  for (let i = 0; i < rest.length; i++) {
    if (typeof rest[i] === type) {
      arr.push(rest[i]);
    }
  }
  return arr;
}
// Дан объект пользователя и массив новых товаров:
// Напишите одним выражением (используя spread оператор) новый объект, который:
// Добавляет все newItems в конец cart
// Меняет name на "Анна Иванова"
// Меняет city на "Санкт-Петербург", не удаляя street
const user = {
  name: "Анна",
  cart: ["книга", "ручка"],
  address: { city: "Москва", street: "Тверская" },
};

const newItems = ["ноутбук", "мышь"];

const newUser = {
  name: "Анна Иванова",
  cart: [...user.cart, ...newItems],
  address: {
    ...user.address,
    city: "Санкт-Петербург",
  },
};
// замыкания
function createCounter(initialValue) {
  let counter = initialValue;

  return {
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    },
    getValue: function () {
      return counter;
    },
    reset: function () {
      counter = initialValue;
      return counter;
    },
  };
}

const counter = createCounter(5);
console.log(counter.getValue());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
counter.reset();
console.log(counter.getValue());

// декораторы

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  console.log(x);
}

function delay(f, ms) {
  function wrapper(...args) {
    setTimeout(() => {
      f.apply(this, args);
    }, ms);
  }

  return wrapper;
}
// // создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
