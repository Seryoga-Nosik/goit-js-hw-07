/* 

Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

<div id="counter">
<button type="button" data-action="decrement">-1</button>
<span id="value">0</span>
<button type="button" data-action="increment">+1</button>
</div> 

*/
const refs = {
  descrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector('#value'),
};

let value = 0;
function onDescrBtnClick() {
  value -= 1;
  refs.counterValue.textContent = value;
}

function onIncrBtnClick() {
  value += 1;
  refs.counterValue.textContent = value;
}

refs.descrBtn.addEventListener('click', onDescrBtnClick);
refs.incrBtn.addEventListener('click', onIncrBtnClick);
