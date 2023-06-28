let surname = prompt("Введите ващу фамилию:")
let name = prompt("Введите ваше имя:");
let secondname = prompt("Введите ваше отчество:");
let age = prompt("Введите ваш возраст:");
let gender = confirm("Ваш пол - мужской?");
let fullName = `${surname} ${name} ${secondname}`;
let ageInDays = age * 365;
let ageAfter5Years = +age + 5;
let pensionableAge = (gender == true) ? 65 : 55;
alert(`Ваше ФИО: ${fullName}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${ageInDays}
    Через 5 лет вам будет: ${ageAfter5Years}
    Ваш пол: ${(gender == true) ? "мужской" : "женский"}
    Вы на пенсии: ${(age >= pensionableAge) ? "да" : "нет"}`);

