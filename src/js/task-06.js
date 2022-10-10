const inputId = document.querySelector("#validation-input");
console.log(inputId.getAttribute("data-length"));
inputId.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputId.getAttribute("data-length"))
  ) {
    inputId.classList.add("valid");
    inputId.classList.remove("invalid");
  } else {
    inputId.classList.remove("valid");
    inputId.classList.add("invalid");
  }
}
