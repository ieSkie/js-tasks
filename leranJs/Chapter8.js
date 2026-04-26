// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);

// defer для прототипа
function f() {
  console.log("Hello!");
}

Function.prototype.defer = function (delay, ...rest) {
  const fn = this;
  setTimeout(() => {
    fn(...rest);
  }, delay);
};
f.defer(1000); // выведет "Hello!" через 1 секунду

// От deepseek
const parent = { name: "Parent" };
const child = Object.create(parent);
child.name = "Child";

console.log(child.name); // Child
console.log(child.__proto__.name); // Parent
console.log(child.__proto__.__proto__ === Object.prototype); // true

//2
function Rabbit() {}
Rabbit.prototype = { jumps: true };

const bunny = new Rabbit();
console.log(bunny.jumps); //true

Rabbit.prototype = {};
console.log(bunny.jumps); //true

//3
const A = { a: 1 };
const B = { b: 2 };
const C = { c: 3 };

Object.setPrototypeOf(B, A);
Object.setPrototypeOf(C, B);

console.log(C.a); //1
console.log(C.b); //2
console.log(C.c); //3

delete C.b;
console.log(C.b); //2

//4
function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
const rex = new Dog();

console.log(rex instanceof Dog);
console.log(rex instanceof Animal);
console.log(rex instanceof Object);

// true.repeat(3)
