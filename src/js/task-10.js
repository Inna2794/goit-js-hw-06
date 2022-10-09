const refs = {
  valueToInput: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divsContainer: document.querySelector("#boxes"),
};
let startBoxSizing = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onCreateCounterInValueInput = (value) => {
  refs.valueToInput.setAttribute("counter", value.currentTarget.value);
};
