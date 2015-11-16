// Задание 8 (Уникальные css классы)
//
// Имеется массив css классов со старницы.
// Необходимо из этого массива получить массив с уникальными именами классов (без повторений)
// отсортированный по частоте использования (наиболее часто используемые - впереди).
// Если классы используются одинаковое количество раз - между ними не важно какой будет первее.


var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header',
			'link', 'footer', 'sidebar', 'link'];


function defineUniqueClasses(arr) {
	var obj = {};

	arr.forEach(function(item){
		if (!obj[item]) {
			obj[item] = 1;
		}

		else {
			obj[item]++;
		}
	})

	var newArr = [];

	for (item in obj){
		newArr.push([item, obj[item]])
	}

	newArr.sort(function(a,b){
		return a[1] < b[1];
	})

	return newArr.map(function(a) {
		return a[0];
	})
}


console.log(defineUniqueClasses(arr));
