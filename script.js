let cards = document.querySelectorAll('.card');
let searchButton = document.querySelector('.seach button');
let searchForm = document.querySelector('.seach input');

let searchElement = function (collection) {
    let cardName = document.querySelectorAll('.card .subtitle');
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
    searchForm.value = '';
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

closeModalButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        modalWindow.classList.remove('modal--show');
    }    
});

let list = document.querySelector('.chat-content');
let messageTemplate = document.querySelector('#message-template').content;
let newMessage = messageTemplate.querySelector('.chat-message');
let input = document.querySelector('.chat-form-input')
let form = document.querySelector('.chat-form');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let youTemplate = newMessage.cloneNode(true);
  let youMessage = youTemplate.querySelector('p');
  youMessage.textContent = input.value; 
  list.appendChild(youTemplate);
  input.value = '';
});
