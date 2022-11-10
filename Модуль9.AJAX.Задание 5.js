/*
***
Модуль 9. AJAX.Задание 5

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).
*/

const subButton = document.getElementById("butt");
const clearlocalStorage = document.getElementById("clearlocalStorage");

const numImagesAvailable = 5;
let getPicts = localStorage.getItem("picts");

if(getPicts){
  document.getElementById("result").innerHTML = getPicts;
}

//Кнопка очистки localStorage
// clearlocalStorage.addEventListener("click", (event) => {
//   event.preventDefault();
//   localStorage.clear();
//   document.getElementById("result").innerHTML = "";
// })

subButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Сбрасываем содержимое div-ов для сообщений
  document.getElementById("alert1").innerHTML = "";
  document.getElementById("alert2").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  const pageNum = Number(document.querySelector("#pageNum").value);
  const limitPage = Number(document.querySelector("#limitPage").value);

  if(pageNum && limitPage){
    if ( pageNum < 1 || pageNum > 10 || isNaN(parseFloat(pageNum)) || !isFinite(pageNum) ) {
      document.querySelector("#alert1").innerHTML = "Номер страницы вне диапазона от 1 до 10";
    } else if ( limitPage < 1 || limitPage > 10 || isNaN(parseFloat(limitPage)) || !isFinite(limitPage) ) {
      document.querySelector("#alert2").innerHTML = "Лимит вне диапазона от 1 до 10";
    } else {
      fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=${limitPage}`)
        .then((response) => {
          const result = response.json();
          return result;
        })
        .then((data) => {
          data.forEach((item) => {
            let imgWrapp = document.createElement("div");
            imgWrapp.innerHTML = `<img src="${item.download_url}" alt="author: ${item.author}">`;
            // Выводим картинку
            document.getElementById("result").append(imgWrapp);
          });
        //Очищаем localStorage
          localStorage.clear();
        // Записываем картинки в localStorage
          pictsForLocalStorage = document.getElementById("result").innerHTML;
          localStorage.setItem("picts", pictsForLocalStorage);
        })
        .catch(() => {
          console.log("error!");
        });
      
    }
  }
  else{
    document.getElementById("alert1").innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
});
