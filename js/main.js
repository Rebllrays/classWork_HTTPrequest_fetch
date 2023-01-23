// Import stylesheets
// import './style.css';

// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/
// fetch('https://rickandmortyapi.com/api/character', {
//     method: "GET",
//     body: JSON.stringify(data),
//     headers: {
//         "content-Type": "application/json;charset=utf-8"
//     }
// });

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

let characters = [];
let list = document.querySelector(".list");
let res = fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        data.results.forEach(item => {
            // console.log(item);
            characters.push(item)
            list.innerHTML += `
            <li class="list_item"><img src="${item.image}" style = "width=50; height=50">
            <p><b>Name</b>: ${item.name}</p>
            <p><b>Gender</b>: ${item.gender}</p>
            <p><b>Status</b>: ${item.status}</p>
            <p><b>Species</b>: ${item.species}</p>
            </li>`
        });        
    });
    
setTimeout(() => {
        let list2 = document.querySelector(".list2");
        fetch(" http://localhost:8006/characters", {
            method: "POST",
            body: JSON.stringify(characters),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(result => result.json()).then((data) => {
            data.forEach((item) => {
                list2.innerHTML += `
                <li class="list2_item"><img src="${item.image}" style = "width=50; height=50">
                <p><b>Name</b>: ${item.name}</p>
                <p><b>Gender</b>: ${item.gender}</p>
                <p><b>Status</b>: ${item.status}</p>
                <p><b>Species</b>: ${item.species}</p>
                </li>`
            })
        })
        console.log(characters);
    }, 1000)



