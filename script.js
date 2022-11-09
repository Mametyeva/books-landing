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
let searchButton = document.querySelector('.seach button');

let searchElement = function (collection) {
    let cardName = document.querySelectorAll('.card .subtitle');
    let searchForm = document.querySelector('.seach input');
    let card;
    for (i = 0; i <= collection.length - 1; i++) {
        if (searchForm.value == cardName[i].textContent) {
            card = collection[i];
        }
    };
    return card;
};

searchButton.addEventListener('click', function () {
    searchElement(cards).classList.add('gold-border');
});

let modalWindow = document.querySelector('.modal');
let closeModalButton = modalWindow.querySelector('.modal .button-close');

closeModalButton.addEventListener('click', function () {
    modalWindow.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        modalWindow.classList.remove('modal--show');
    }    
});

for (i = 0; i <= cards.length - 1; i++) {
    cards[i].addEventListener('click', function () {
        modalWindow.classList.add('modal--show');
    });
}
