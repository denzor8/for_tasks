//1+
// Задача. Выведите столбец чисел от 1 до 50.
// for (i = 1; i <= 50; i++) {
// 	console.log(i)
// }
//1.1+
// let i = 1
// while (i <= 50) {
// 	console.log(i)
// 	i++
// }

//2
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5]
// for (i = 0; i < arr.length; i++) {
// 	console.log(arr[i])
// }

//3
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите
// произведение элементов этого массива.
// let res = 1
// let arr = [2, 3, 4, 5]
// for (i = 0; i < arr.length; i++) {
// 	res = res * arr[i]
// 	console.log(res)
// }

//4

// Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь',
// 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого
// формата: 'Минск - это Беларусь.'.

// let obj = {
// 	Минск: 'Беларусь',
// 	Москва: 'Россия',
// 	Киев: 'Украина',
// }

// for (let key in obj) {
// 	console.log(key + 'это ' + obj[key])
// }

//5
// Решите эти задачи сначала через цикл while, а затем через цикл for.
// 5.1 Выведите столбец чисел от 1 до 100.
// 5.2 Выведите столбец чисел от 11 до 33.
// 5.3 Выведите столбец четных чисел в промежутке от 0 до 100.
// 5.4 С помощью цикла найдите сумму чисел от 1 до 100.

//5.1
// let i = 1
// while (i <= 100) {
// 	console.log(i);
// 	i++
// }
// //5.1.1
// for (i = 1; i <= 100; i++){
// 	console.log(i);
// }

// 5.2
// 5.2.1
// let i = 11
// while (i <= 33) {
// 	console.log(i);
// 	i++
// }
// // 5.2.2
// for (i = 11; i <= 33; i++){
// 	console.log(i);
// }

// 5.3.1
// let i = 1
// while (i <= 100) {
// 	if (i % 2 == 0) console.log(i)
// 	i++
// }
////5.3.2
// for (i = 1; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i)
// 	}
// }

// 5.4.1
// i = 1
// while (i <= 100) {
// 	console.log(i + i)
// 	i++
// }
// // 5.4.2
// for (i = 1; i <=100; i++){
//  console.log(i+i);
// }

// 6
// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и
// оператора if выведите на экран столбец тех элементов массива, которые больше 3-х,
// но меньше 10.
// let arr = [2, 5, 9, 15, 0, 4]
// for (i = 0; i < arr.length; i++){
// 	if (i > 3 && i < 10) {
// 		console.log(i);
// 	}
// }

//7
//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и
// оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть
// - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr =[1, 2, 5, 9, 4, 13, 4, 10]
// for (i = 0; i < arr.length; i++){
// 	if (i == 4) 
// 		console.log('Есть');
// 	}
// }

//8
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000]
// for (let i = 0; i < arr.length; i++) {
// 	let num = String(arr[i])
// 	let char = num[0]
// 	if (char == 1 || char == 2 || char == 5) {
// 		console.log(num)
// 	}
// }

//9
//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-
// 1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (i = 0; i < arr.length; i++) {
// 	console.log('-' + arr[i])
// }

//10
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а
// выходные дни выведите жирным.

let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскрсенье']
for (i = 0; i < arr.length; i++) {
	let arr2 = arr[i]
	arr2.splice()
	console.log(arr2)
}
