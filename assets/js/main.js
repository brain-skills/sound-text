var lang = "ru-RU"; // Задаём стандартный язык произношения

let main = document.querySelector('.main'); // Получаем главное меню
let sel = document.querySelector('#lang'); // Получаем селектор для наполнение
let sound = document.querySelector('#text'); // Получаем элемент input
let land = window.speechSynthesis.getVoices(); // Тестовый вызов для получения языков(Так как speech с 2018 года работает исключительно по активации.
activate.onclick = function() { // При нажатии на кнопку
    let reactivate = window.speechSynthesis.getVoices(); // Реактивируем получения языков воспроизводимости
    reactivate.forEach(function (c) { //Для каждого элемента
        let opt = document.createElement('option'); // Создаём option
        opt.value = c.lang; // В value помещяем код языка
        opt.innerText = c.name; // В текст option название языка
        sel.appendChild(opt); // Добавляем в селект
    });
    document.querySelector('#activate').style.display = 'none'; // Скрываем начальную кнопку
    main.style.display = 'block'; // Показываем основной блок
};

sel.onchange = function () { // При выборе селекта
    lang = this.value; // Меняем язык на выбранный
};
function speak(){ // Функция речи
    var speech = window.speechSynthesis, // Объявляем переменные
        voice = '',
        ourvoice = []; // Сюда будем складывать доступные звуки браузера
    if (0 === ourvoice.length) { // Если равно нулю, то...
        var voices = speech.getVoices(); // Получаем все языки
    }
    for (var i = 0; i < voices.length; i++) { // Находим указанный в списке
        if (lang == voices[i].lang) {
            voice = voices[i]; // Ставим язык как параметр
        }
    }
    var readme = new SpeechSynthesisUtterance(sound.value); // вводим текст
    readme.voice = voice; // Задаём язык произношения
    speech.speak(readme); // Произносим
}