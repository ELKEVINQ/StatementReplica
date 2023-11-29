const { debug } = require("console");

document.addEventListener('DOMContentLoaded', function () {
    var arrowLeft = document.querySelector('.arrow-left');
    var arrowRight = document.querySelector('.arrow-right');
    var listItems = document.querySelectorAll('.list-group-item');

    var currentIndex = 0;

    // Agrega el evento click al botón de la flecha izquierda
    arrowLeft.addEventListener('click', function () {
        if (currentIndex > 0) {
            listItems[currentIndex].style.display = 'none';
            currentIndex--;
            listItems[currentIndex].style.display = 'block';
        }
    });

    // Agrega el evento click al botón de la flecha derecha
    arrowRight.addEventListener('click', function () {
        if (currentIndex < listItems.length - 1) {
            listItems[currentIndex].style.display = 'none';
            currentIndex++;
            listItems[currentIndex].style.display = 'block';
        }
    });
});

const listGroupItems = document.querySelectorAll('.list-group-item');
let currentItemIndex = 0;

const arrowLeft = document.querySelector('.arrow-left');
arrowLeft.addEventListener('click', () => {
    if (currentItemIndex >= 3) {
        currentItemIndex--;
        updateDisplayedItem();
    } else {
        currentItemIndex = 3;
    }
});

const arrowRight = document.querySelector('.arrow-right');
arrowRight.addEventListener('click', () => {
    if (currentItemIndex < 3) {
        currentItemIndex++;
        updateDisplayedItem();
    } else {
        currentItemIndex = 0;
    }
});

function updateDisplayedItem() {
    console.
    debug.log(currentItemIndex + " este es el item actual");
    for (let i = 0; i < listGroupItems.length; i++) {
        console.log(i + " este es el item actual")
        if (i === currentItemIndex) {
            listGroupItems[i].style.display = 'block';
        } else {
            listGroupItems[i].style.display = 'none';
        }
    }
}