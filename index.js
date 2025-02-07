// 1. Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).

document.getElementById("task_1").addEventListener("click", function () {
  const age = Number(prompt("Сколько вам лет"));
  switch (true) {
    case 2 >= age && age >= 0:
      alert("Ты ребёнок");
      break;
    case 12 <= age && age <= 18:
      alert("Ты подросток");
      break;
    case 18 <= age && age <= 60:
      alert("Ты взрослый");
      break;
    case 60 <= age && age <= 110:
      alert("Ты пенсионер");
      break;
    case 110 <= age:
      alert("Ты ещё жив ???");
      break;

    default:
      alert("Неверное значение !!!");
      break;
  }
});

// --------------------------------------------------------------------------------------------------------------------------

// 2. Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

document.getElementById("task_2").addEventListener("click", function () {
  const number = Number(prompt("Выбери число от 0 до 9:"));
  switch (number) {
    case 0:
      alert(")");
      break;
    case 1:
      alert("!");
      break;
    case 2:
      alert("@");
      break;
    case 3:
      alert("#");
      break;
    case 4:
      alert("$");
      break;
    case 5:
      alert("%");
      break;
    case 6:
      alert("^");
      break;
    case 7:
      alert("&");
      break;
    case 8:
      alert("*");
      break;
    case 9:
      alert("(");
      break;
    default:
      alert("Неверное значение !!!");
      break;
  }
});

// --------------------------------------------------------------------------------------------------------------------------

// 3. Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.

document.getElementById("task_3").addEventListener("click", function () {
  const number = prompt("Введите трёхзначное число:");

  let i = 0;
  let a = 0;
  let finishNumber = "";

  while (i < number.length) {
    if (number[a] === number[i + 1]) {
      if (!finishNumber.includes(number[a])) {
        finishNumber = finishNumber + number[a];
      }
    }

    i = i + 1;

    if (i === number.length - 1) {
      a = a + 1;
      i = a;
    }

    if (a === number.length - 1) {
      break;
    }
  }

  if (finishNumber === "") {
    alert("Нет нету");
  } else {
    alert(
      `Да есть. Это число или же числа: ${finishNumber.split("").join(" - ")}`
    );
  }

  // alert(finishNumber);

  // switch (true) {
  //   case number[0] === number[1]:
  //     alert(`В нем ЕСТЬ одинаковые цифры !!!`);
  //     break;

  //   case number[0] === number[2]:
  //     alert(`В нем ЕСТЬ одинаковые цифры !!!`);
  //     break;

  //   case number[1] === number[2]:
  //     alert(`В нем ЕСТЬ одинаковые цифры !!!`);
  //     break;

  //   default:
  //     alert(`В нем НЕТУ одинаковых цифыр !!!`);
  //     break;
  // }
});

// --------------------------------------------------------------------------------------------------------------------------

// 4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.

document.getElementById("task_4").addEventListener("click", function () {
  const year = Number(prompt("Введите год:"));
  year % 100 !== 0 && (year % 400 === 0 || year % 4 === 0)
    ? alert("Это високосный год")
    : alert("Это НЕ високосный год");
});

// --------------------------------------------------------------------------------------------------------------------------

// 5. Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.

document.getElementById("task_5").addEventListener("click", function () {
  const number = prompt("Введите пятиразрядное число:");

  if (number.length !== 5) {
    alert("Ошибка! Введите 5 цифр.");
  } else if (number === number.split("").reverse().join("")) {
    console.log;
    alert(`Палиндром!`);
  } else {
    alert(`Не палиндром.`);
  }
});

// --------------------------------------------------------------------------------------------------------------------------

// 6. Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

document.getElementById("task_6").addEventListener("click", function () {
  const amount = prompt("Введите сумму в USD:");
  const currency = prompt("Введите валюту:");

  switch (currency) {
    case "EUR":
      alert(`${amount * 0.9596} EUR`);
      break;

    case "UAN":
      alert(`${amount * 7.2893} UAN`);
      break;
    case "AZN":
      alert(`${amount * 1.7} AZN`);
      break;

    default:
      alert("Неверное значение !!!");
      console.log(currency);
      break;
  }
});

// --------------------------------------------------------------------------------------------------------------------------

// 7. Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

document.getElementById("task_7").addEventListener("click", function () {
  const price = Number(prompt("Сумма покупки:"));

  switch (true) {
    case 200 <= price && price < 300:
      alert(`${price - price * 0.03}`);
      break;
    case 300 <= price && price < 500:
      alert(`${price - price * 0.05}`);
      break;
    case 500 <= price:
      alert(`${price - price * 0.07}`);
      break;

    default:
      break;
  }
});

// 8. Пользователь вводит сумму денег в кошельке и цену одной
// шоколадки. Программа выводит сколько шоколадок может
// купить пользователь и сколько сдачи у него останется.

document.getElementById("task_8").addEventListener("click", function () {
  const money = Number(prompt("Сколько у вас денег ???"));
  const price = Number(prompt("Цена одной шоколадки ???"));
  const amount = Math.trunc(money / price);

  alert(
    `Вы можете купить: ${amount} шоколадки и у вас останется ${
      money - price * amount
    } AZN`
  );
});

// --------------------------------------------------------------------------------------------------------------------------

// 9. Запросите у пользователя трехзначное число и выведите
// его задом наперед. Для решения задачи вам понадобится
// оператор % (остаток от деления).

document.getElementById("task_9").addEventListener("click", function () {
  let i = 0;
  const number = prompt("Введите число");
  let turnOver = null;

  while (i < number.length) {
    i++;
    turnOver = String(turnOver + Number(number[number.length - i]));
  }

  alert(turnOver);

  // alert(`${number[2] + number[1] + number[0]}`);
});

// --------------------------------------------------------------------------------------------------------------------------

// 10. Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.

document.getElementById("task_10").addEventListener("click", function () {
  const number = Number(Math.trunc(prompt("Введите число")));

  Number(number % 2) === 0 && alert(`Чётный`);
  Number(number % 2) !== 0 && alert(`Нечётный !!!`);
});
