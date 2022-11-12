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

let openModalWindow = function (product, image, name, autor) {
    let modalImg = modalWindow.querySelector('.modal-photo');
    let modalProductName = modalWindow.querySelector('.modal .subtitle');
    let modalProductAutor = modalWindow.querySelector('.modal .caption');
    product.addEventListener('click', function () {
        modalWindow.classList.add('modal--show');
        modalImg.src = image;
        modalProductName.textContent = name.textContent;
        modalProductAutor.textContent = autor.textContent;
    });
}

for (i = 0; i <= cards.length - 1; i++) {
    let productImg = document.querySelectorAll('.photo');
    let productName = document.querySelectorAll('.card .card-name');
    let productAutor = document.querySelectorAll('.card .card-autor');
    openModalWindow(cards[i], productImg[i].src, productName[i], productAutor[i]);
};

closeModalButton.addEventListener('click', function () {
    modalWindow.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        modalWindow.classList.remove('modal--show');
    }    
});