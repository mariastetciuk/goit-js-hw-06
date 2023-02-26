const inputEl = document.querySelector(`#font-size-control`);
const outputEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, handleChangFontSizeoutput);

outputEl.style.fontSize = `${inputEl.value}px`;

function handleChangFontSizeoutput(event) {
  outputEl.style.fontSize = event.currentTarget.value + 'px';
}
