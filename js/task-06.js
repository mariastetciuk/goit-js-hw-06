const inputEl = document.querySelector(`#validation-input`);

inputEl.addEventListener(`blur`, handleChackValueInput);

function handleChackValueInput(event) {
  inputEl.classList.add(`invalid`);
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.replace(`invalid`, `valid`);
  }
}
