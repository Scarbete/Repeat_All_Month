// Задание - 1

var anime = {
    name: 'Магическая Битва',
    mainActor: 'Итадори Юдзи',
    year: 2020,
    ageRating: '18 + ',
    episodes: {
        series: 24,
        seria1: {seriaName: 'Двуликий призрак'},
        seria2: {seriaName: 'Ради себя'},
        seria3: {seriaName: 'Железная девушка'},
        seria4: {seriaName: 'Устранение сферы'},
        seria5: {seriaName: 'Устранение сферы часть-2'},
        seria6: {seriaName: 'После дождя'},
        seria7: {seriaName: 'Нападение'},
        seria8: {seriaName: 'Скучный'},
        seria9: {seriaName: 'обратная связь'},
        seria10: {seriaName: 'Инертная трансформация'},
    }
}

console.log(`Сериал ${anime.name}, 
был выпущен ${anime.year} года. 
В главных ролях ${anime.mainActor}. 
${anime.name} - ${anime.episodes.series} серий

1 - серия: ${anime.episodes.seria1.seriaName}
2 - серия: ${anime.episodes.seria2.seriaName}
3 - серия: ${anime.episodes.seria3.seriaName}
4 - серия: ${anime.episodes.seria4.seriaName}
5 - серия: ${anime.episodes.seria5.seriaName}
6 - серия: ${anime.episodes.seria6.seriaName}
7 - серия: ${anime.episodes.seria7.seriaName}
8 - серия: ${anime.episodes.seria8.seriaName}
9 - серия: ${anime.episodes.seria9.seriaName}
10 - серия: ${anime.episodes.seria10.seriaName}
`)

// Задание - 2

var week = prompt('Enter day of week: ').toLowerCase()

switch (week) {
    case 'monday':
        console.log('Понедельник')
        break
    case 'tuesday':
        console.log('Вторник')
        break
    case 'wednesday':
        console.log('Среда')
        break
    case 'thursday':
        console.log('Четверг')
        break
    case 'friday':
        console.log('Пятница')
        break
    case 'saturday':
        console.log('Суббота')
        break
    case 'sunday':
        console.log('Воскресенье')
        break
    default:
        console.log('ERROR!')
        break
}