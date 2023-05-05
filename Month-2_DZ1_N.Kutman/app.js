// Задание - 1

var name = prompt('Введите свое имя')
var surName = prompt('Введите свою фамилию')
var newPassword = prompt('Придумайте пароль')
var password = prompt('Введите пароль')

if ( newPassword === password ) {
    alert('Добро пожаловать! ' + surName + ' ' + name)
} else {
    alert('ERROR')
}

// Задание - 2

var day = Number(prompt('Введите день своего рождения: '))
var month = Number(prompt('Введите месяц своего рождения: '))


if ( month === 12 && day >= 22 || month === 1 && day <= 20 ) {
    alert('Ваш знак зодиака Козерог')
} else if ( month === 1 && day >= 21 || month === 2 && day <= 19 ) {
    alert('Ваш знак зодиака Водолей')
} else if ( month === 2 && day >= 20 || month === 3 && day <= 20 ) {
    alert('Ваш знак зодиака Рыбы')
} else if ( month === 3 && day >= 21 || month === 4 && day <= 20 ) {
    alert('Ваш знак зодиака Овен')
} else if ( month === 4 && day >= 21 || month === 5 && day <= 21 ) {
    alert('Ваш знак зодиака Телец')
} else if ( month === 5 && day >= 22 || month === 6 && day <= 21 ) {
    alert('Ваш знак зодиака Близнецы')
} else if ( month === 6 && day >= 22 || month === 7 && day <= 23 ) {
    alert('Ваш знак зодиака Рак')
} else if ( month === 8 && day >= 20 || month === 9 && day <= 20 ) {
    alert('Ваш знак зодиака Лев')
} else if ( month === 9 && day >= 24 || month === 10 && day <= 23 ) {
    alert('Ваш знак зодиака Дева')
} else if ( month === 10 && day >= 24 || month === 11 && day <= 23 ) {
    alert('Ваш знак зодиака Весы')
} else if ( month === 11 && day >= 24 || month === 12 && day <= 22 ) {
    alert('Ваш знак зодиака Скорпион')
} else if ( month === 12 && day >= 23 || month === 9 && day <= 21 ) {
    alert('Ваш знак зодиака Стрелец')
} else if ( month > 12 && day > 31 ) {
    alert('Вы ввели большое число...')
} else {
    alert('ERROR')
}