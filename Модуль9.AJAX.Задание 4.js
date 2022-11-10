/*
***
 Модуль 9. AJAX.Задание 4
 ********************************
 
Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.
*/

const subButton = document.getElementById('butt');

subButton.addEventListener("click", (event) => {
    event.preventDefault();
  // Сбрасываем содержимое div-ов для сообщений
    document.getElementById('alert').innerHTML = '';
    document.getElementById('resultWrapp').innerHTML = '';
    const size1 = Number(document.querySelector('#size1').value);
    const size2 = Number(document.querySelector('#size2').value);
 
    if (size1 && size2) {
        if (100 > size1 || size1 > 300 ||  100 > size2 || size2 > 300) {
          document.getElementById('alert').innerHTML = 'одно из чисел вне диапазона от 100 до 300';
        }
        else {
          fetch(`https://picsum.photos/${size1}/${size2}`)
          .then((response) => {
            document.querySelector('#resultWrapp').innerHTML = `<img src="${response.url}" alt="img">`;
          })
          .catch(() => { console.log('error') });
        }
    }
    else {
        document.getElementById('alert').innerHTML = 'вы не ввели размер картинок';
    }
})
