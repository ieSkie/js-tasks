class Car {
  constructor(options) {
    this.name = options.name;
    this.year = options.year;
  }
  sound() {
    console.log("Vrum-vrum");
  }
}

class JapaneseCars extends Car {
  constructor(options) {
    super(options);
    this.manufacturer = options.manufacturer;
  }
}

class GermanCars extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
}

const toyota = new JapaneseCars({
  name: "toyota camry",
  year: 2015,
  manufacturer: "Sapporo",
});

const bmw = new GermanCars({
  name: "bmw m3",
  year: 2020,
  color: "blue",
});

console.log(bmw.sound());
