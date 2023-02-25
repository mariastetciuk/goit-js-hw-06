const counterValueEl = document.querySelector(`#value`);
const btnDecrementEl = document.querySelector(
  `button[data-action="decrement"]`
);
const btnIncrementEl = document.querySelector(
  `button[data-action="increment"]`
);

let counterValue = 0;

btnDecrementEl.addEventListener(
  `click`,
  () => (counterValueEl.textContent = counterValue -= 1)
);

btnIncrementEl.addEventListener(
  `click`,
  () => (counterValueEl.textContent = counterValue += 1)
);
