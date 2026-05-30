function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

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
