/*
***
Модуль 9. AJAX.Задание 3

Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all, где get-параметр limit — это введённое число.
Пример: если пользователь ввёл 5, то запрос будет вида https://loremflickr.com/json/g/320/240/all.
После получения данных вывести ниже картинки на экран.

Подсказка: получение данных из input.

const value = document.querySelector('input').value;
*/

const subButton = document.getElementById('butt');

subButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById('alert').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    const inputNum = Number(document.querySelector('input').value);
    if (inputNum) {
        if (1 <= inputNum && inputNum <= 10) {
            const xhr = new XMLHttpRequest();
           xhr.open('GET', 'https://picsum.photos/v2/list/?limit='+inputNum);
            xhr.send();
            xhr.responseType = 'json';
            xhr.onload = () => {
                if (xhr.status !== 200) {
                    return;
                }
                const response = xhr.response;
                console.log('response',response)
                console.log('response l',response.length)
                response.forEach(item => {
                  let imgWrapp = document.createElement('div');
                  imgWrapp.innerHTML = `<img src="${item.download_url}" alt="author: ${item.author}">`;
                  document.getElementById('result').append(imgWrapp);
                });
            }
        }
        else {
            document.getElementById('alert').innerHTML = 'число вне диапазона от 1 до 10';
        }
    }
    else {
        document.getElementById('alert').innerHTML = 'вы не ввели число';
    }
})
