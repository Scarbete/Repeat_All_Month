// 1 - Написать функцию переворота строки (использовать reverse нельзя, нужно самим прописать логику).
// Например: "привет" -> "тевирп" и так далее.

const reverseText = text => {
    let reverse = ''
    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i]
    }
    return reverse
}

console.log(reverseText('hello'))

// 2 - написать функцию, которая принимает неограниченное кол-во чисел и возвращает их среднюю арифметическую
//  ⁃ повторите все пройденные темы

const arr = [24, 56, 58, 5, 65, 35, 5, 75, 35, 67, 53, 2]

const average = arr => {
    let count = 0
    arr.forEach(num => count += num)
    return count / arr.length
}

console.log(average(arr))