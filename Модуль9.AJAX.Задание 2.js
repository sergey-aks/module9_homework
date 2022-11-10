/*
***
 Модуль 9. AJAX.Задание 2

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
*/

const jsonForParsing = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const parseData = JSON.parse(jsonForParsing);

const lists = parseData.list;
const output = {};
const arr = [];

lists.forEach(item => {
  let res = {
    name: item.name,
    age: Number(item.age),
    prof: item.prof,
  }
  arr.push(res);
});

output.list = arr;
console.log('output:',output);