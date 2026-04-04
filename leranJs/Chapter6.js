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
