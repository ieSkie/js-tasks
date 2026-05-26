// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
// Класс должен поддерживать свойства message, name и stack.

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

let err = new FormatError("ошибка форматирования");
console.log(err instanceof SyntaxError);

// Задача 1 — try..catch
// Есть функция, которая парсит JSON с данными пользователя. Напиши код который:
// Обрабатывает невалидный JSON (например строка "{ broken json")
// Обрабатывает случай когда JSON валидный, но нет поля name
// В блоке finally выводит "Парсинг завершён"

function parseUser(json) {
  try {
    let data = JSON.parse(json);
    if (!data.name) {
      console.log("there's no name");
    } else {
      console.log(data.name);
    }
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log(e.name);
    } else throw e;
  } finally {
    console.log("Parsing finished");
  }
}

parseUser("{ broken json"); // должен поймать SyntaxError
parseUser('{ "age": 25 }'); // должен поймать отсутствие name
parseUser('{ "name": "Анна" }'); // должен вывести имя

// Задача 2 — Пользовательские ошибки
// Создай класс ValidationError который наследует от Error. Затем напиши функцию validateAge(age) которая:

// Бросает ValidationError если age не число
// Бросает ValidationError если age меньше 0 или больше 150
// Возвращает "Возраст корректен" если всё ок

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (typeof age !== "number") {
    throw new ValidationError("должно быть числом");
  }
  if (age < 0 || age > 150) {
    throw new ValidationError("вне диапазона 0-150");
  }
  return "Возраст корректен";
}

try {
  console.log(validateAge("двадцать"));
  console.log(validateAge(-5));
  console.log(validateAge(25));
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.name + ":", e.message);
  } else {
    throw e;
  }
}
