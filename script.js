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
  var youTemplate = newMessage.cloneNode(true);
  var youMessage = youTemplate.querySelector('p');
  youMessage.textContent = input.value; 
  list.appendChild(youTemplate);
  input.value = '';
});

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function newPosition (oldTop, oldLeft, width, height) {
//     var range = 2; // Тут выставьте свой минимальный диапазон дальности
//     var newTop = getRandomInt(0, height);
//     var newLeft = getRandomInt(0, width);
//     if ( ((oldTop-range)<newTop && (oldTop+range)>newTop) ||
//          ((oldLeft-range)<newLeft && (oldLeft+range)>newLeft)) 
//        return newPosition (oldTop, oldLeft, width, height);
//     else return [newTop, newLeft];
// }
// $("#my-button").hover(function () {
//     var buttonPosition = newPosition ( 
//         parseInt($(this).css("top")), 
//         parseInt($(this).css("left")), 
//         $(".button-wrapper").width(), 
//         $(".button-wrapper").height() 
//     );
//     $(this).css({
//         top: buttonPosition[0],
//         left: buttonPosition[1]
//     });
// }, function () { });



// второй вариант
$(document).on('mousemove', function (e) {
    $('#my-button').css({
        marginLeft: -e.pageX / 100 + 20,
        marginTop: -e.pageY / 100 + 20
    })
})