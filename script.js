let title = document.querySelector('h1');
title.onclick = function () {
    console.log("it`s work!");
    alert("hello");
}

let books = [
    {
        name: 'Портрет Дориана Грея',
        autor: 'Оскар Уаильд',
        cost: '350'
    },
    {
        name: 'Айвенго',
        autor: 'Вальтер Скотт',
        cost: '350'
    },
    {
        name: 'Мастер и Маргарита',
        autor: 'Михаил Булгаков',
        cost: '350'
    },
    {
        name: 'Список Шиндлера',
        autor: 'Томас Кенилли',
        cost: '350'
    }
];

let cards = document.querySelectorAll('.card');
let cardName = document.querySelectorAll('.card .subtitle');
let searchForm = document.querySelector('.seach input');
let searchButton = document.querySelector('.seach button');

let cards[i] = currentCard;
searchButton.onclick = function () {
    for (i = 0; i <= cards.length - 1; i++) {
        if (searchForm.value == cardName[i].textContent) {
            currentCard.classList.add('gold-border');
            alert(cardName[i].textContent);
            break;
        } else {
            alert('Ничего не найдено, проверьте правильность написания запроса');
            break;
        }
    }
};