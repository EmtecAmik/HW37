// 1.Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function find(a, b) {
//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
// }


// 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function findandlog(num1, num2) {
    
//     let start, end
//     if (num1 > num2) {
//         start = num1
//         end = num2
//     } else {
//         start = num2
//         end = num1
//     }

//     for (let i = start; i >= end; i--) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }


// 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function power(number1, number2 =2) {
//       const result = Math.pow(number1, number2)
      
// }



// 4.Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function sumNumbers(n) {
    
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }

// 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function sumEvenAndOdd(n, m) {
    
//     let sumEven = 0
//     let sumOdd = 0

//     for (let num = n; num <= m; num++) {
       
//         if (num % 2 === 0) {
//             sumEven += num
//         } else {
//             sumOdd += num
//         }
//     }


//     console.log("Сумма четных чисел от", n, "до", m, ":", sumEven)
//     console.log("Сумма нечетных чисел от", n, "до", m, ":", sumOdd)
// }


// 6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'




// let stringsArray = ["one", "two", "three"]

// function findLongestElement(strings) {
//     if (strings.length === 0) {
//         return null
//     }

//     let longest = strings[0]

//     for (let i = 1; i < strings.length; i++) {
//         if (strings[i].length >= longest.length) { 
//             longest = strings[i]
//         }
//     }

//     return longest
// }


// console.log(findLongestElement(stringsArray))