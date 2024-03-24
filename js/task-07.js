/*
Завдання 7
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const inputRange = document.querySelector('#font-size-control');
const spanFontSize = document.querySelector('#text');

inputRange.addEventListener('input', sizeChange);

function sizeChange () {
  spanFontSize.style.fontSize = inputRange.value + 'px';
}
