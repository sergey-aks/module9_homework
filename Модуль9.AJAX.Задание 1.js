/*
***
 Модуль 9. AJAX.Задание 1

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/

const xmlForParsing = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();

const docXML = parser.parseFromString(xmlForParsing, "text/xml");

const student = docXML.querySelectorAll('student');

const output = {};
const arr = [];
const map = new Map();

student.forEach(item => {
  let firstName = item.querySelector('first');
  let secondName = item.querySelector('second');
  let age = item.querySelector('age');
  let prof = item.querySelector('prof');
  let name = item.querySelector('name');
  let lang = name.getAttribute('lang');
  
  map.set('name', firstName.textContent+' '+secondName.textContent);
  map.set('age', age.textContent);
  map.set('prof', prof.textContent);
  map.set('lang', lang);
  
  let obj = Object.fromEntries(map)

  arr.push(obj);
});
output.list = arr;
console.log('output:',output);
