// Задание 4 (Object counter)
//
// Добавить в конструктор Article:
//
// Подсчёт общего количества созданных объектов.
// Запоминание даты последнего созданного объекта.
// Используйте для этого статические свойства.
// Пусть вызов Article.showStats() выводит то и другое.


'use strict';


function Article() {
  Article.currentCount = ( Article.currentCount == undefined )
  ? Article.currentCount = 0
  : Article.currentCount++;

  Article.currentCount++;
  this.Date = new Date();
  Article.lastDate = this.Date;

}

Article.showStats = function(){
  return this.currentCount +':::'+ this.lastDate;
}

var a = new Article();
var b = new Article();
var c = new Article();
var d = new Article();

console.log(Article.showStats());
