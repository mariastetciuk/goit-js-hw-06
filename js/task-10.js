function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector(`input`);
const btnCreateEl = document.querySelector(`[data-create]`);
const btnDestroyEl = document.querySelector(`[data-destroy]`);
const boxesEl = document.querySelector(`#boxes`);

btnCreateEl.addEventListener(`click`, onCreateBoxes);
btnDestroyEl.addEventListener(`click`, onDestroyBoxes);

function onCreateBoxes() {
  let collectionBox = [];

  let sitze = 30;

  for (let i = 0; i < inputEl.value; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${sitze}px`;
    box.style.height = `${sitze}px`;
    box.style.backgroundColor = getRandomHexColor();

    sitze += 10;

    collectionBox.push(box);
  }
  boxesEl.append(...collectionBox);

  inputEl.value = ``;
}

function onDestroyBoxes() {
  boxesEl.innerHTML = ``;
}
