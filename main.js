// ### Задание 1: Сумма чисел
// Напиши функцию, которая принимает массив чисел и возвращает их сумму, используя только reduce.
// Пример массива:
// [1, 2, 3, 4, 5]


// const numbers =[1, 2, 3, 4, 5]
// const sum = numbers.reduce((prev, item) => {
// return prev + item;
// },0)
// console.log(sum);





// ### Задание 2: Произведение чисел
// Создай функцию, которая принимает массив чисел и возвращает их произведение с помощью только reduce.
// Пример массива:
// [1, 2, 3, 4]


// const numbers = [1, 2, 3, 4]
// const sum = numbers.reduce((prev, item) => {
// return prev * item;
// },1)
// console.log(sum);






// ### Задание 3: Поиск максимального числа
// Используя только reduce, напиши функцию, которая находит и возвращает максимальное число в массиве.
// Пример массива:
// [10, 5, 8, 20, 3]


// const numbers = [10, 5, 8, 20, 3]
// const result = numbers.reduce((prev, item) => {
//     if(item > prev){
//         return item
//     }
//     else{
//         return prev
//     }
// })
// console.log(result)








// ### Задание 4: Поиск минимального числа
// Напиши функцию, которая с помощью только reduce находит и возвращает минимальное число в массиве.
// Пример массива:
// [10, 5, 8, 20, 3]


// const numbers = [10, 5, 8, 20, 3]
// const result = numbers.reduce((prev, item) => {
//     if(item < prev){
//         return item
//     }
//     else{
//         return prev
//     }
// })
// console.log(result)






// ### Задание 5: Объединение чисел в строку
// Создай функцию, которая принимает массив чисел и возвращает строку, состоящую из всех элементов
//  массива, соединённых без пробелов, используя только reduce.
// Пример массива:
// [1, 2, 3, 4, 5]


// const numbers = [1, 2, 3, 4, 5];
// const num = numbers.reduce((prev, item) => {
// return numbers.toString()
// })
// console.log(num)










// ### Задание 6: Сумма значений по ключу
// Дан массив объектов, каждый из которых содержит числовое свойство value. Напиши функцию,
//  которая с помощью только reduce суммирует все значения value.
// Пример массива:
// [{ value: 10 }, { value: 20 }, { value: 30 }]


// const numbers = [{ value: 10 }, { value: 20 }, { value: 30 }];
// const num = numbers.reduce((prev, item) => {
// return prev + item.value
// }, 0)
// console.log(num)






// ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// ### Задание 7: Подсчет количества определенных значений
// Дан массив, содержащий только строки "да" и "нет". Напиши функцию, которая с помощью только reduce подсчитывает количество строк "да".
// Пример массив:
// ["да", "нет", "да", "нет", "да"]


// const strings = ["да", "нет", "да", "нет", "да"]
// const num = 1
// const result = strings.reduce((prev, item) => {
//         if (item === "да") {
//            item = num;
//             return num + prev
//         }
//         else {
//             return 0
//         }
// },0)
// console.log(result)





// ### Задание 8: Удаление дубликатов
// Напиши функцию, которая с помощью только reduce удаляет дубликаты из массива.
// Пример массива:
// [1, 2, 2, 3, 4, 4, 5]


// const numbers = [1, 2, 2, 3, 4, 4, 5]
// const num = numbers.reduce((prev, item) => {

// })
// console.log(num)


// ### Задание 9: Подсчет частоты элементов
// Дан массив чисел. Напиши функцию, которая с помощью только reduce подсчитывает,
//  сколько раз каждое число встречается в массиве и возвращает объект с результатом.
// Пример массива:
// [1, 2, 2, 3, 3, 3, 4]




// ### Задание 10: Обратный порядок чисел
// Напиши функцию, которая с помощью только reduce переворачивает массив чисел в обратном порядке.
// Пример массива:
// [1, 2, 3, 4, 5]