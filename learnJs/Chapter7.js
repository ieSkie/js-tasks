const bankAccount = {
  owner: "Alice Smith",
  _balance: 1000,
  get balance() {
    return this._balance;
  },
  set balance(value) {
    if (value < 0) {
      console.error("Balance cannot be negative");
      return;
    }
    this._balance = value;
  },
};

Object.defineProperty(bankAccount, "_balance", {
  configurable: true,
  writable: false,
  enumerable: false,
});
Object.defineProperty(bankAccount, "currency", {
  value: "USD",
  configurable: true,
  writable: false,
  enumerable: true,
});

bankAccount._balance = 100;
console.log(bankAccount.currency);

// Создайте объект thermometer с приватным свойством _celsius и свойством celsius (геттер/сеттер).
// Сеттер должен принимать число и выбрасывать ошибку, если температура ниже абсолютного нуля (-273.15°C).
const thermometr = {
  _celsius: 100,

  get celsius() {
    return this._celsius;
  },

  set celsius(value) {
    if (value < -273.15) {
      throw new TypeError("Температура ниже абсолютного нуля");
    }
    this._celsius = value;
  },
};

thermometr.celsius = 25;

console.log(thermometr.celsius);

// Создайте объект converter со свойствами:
// _meters (приватное)
// meters (геттер/сеттер)
// feet (геттер/сеттер) — автоматически конвертирует в футы и обратно
const converter = {
  _meters: 0,

  get meters() {
    return this._meters;
  },

  set meters(value) {
    if (typeof value !== "number" || value < 0) {
      throw new TypeError("Meters must be a positive number");
    }
    this._meters = value;
  },

  get feet() {
    return this._meters * 3.28084;
  },

  set feet(value) {
    if (typeof value !== "number" || value < 0) {
      throw new TypeError("Feet must be a positive number");
    }
    this._meters = value / 3.28084;
  },
};

converter.meters = 100;
console.log(converter.meters, "метров = ", converter.feet, "футов");
converter.feet = 100;
console.log(
  converter.feet,
  "футов - приблизительно ",
  Math.round(converter.meters),
  "метров",
);
