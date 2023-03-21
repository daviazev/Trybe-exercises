const body = document.querySelector("body");

const buttonChangeBack = document.querySelector("#backColorButton");
const inputBack = document.querySelector("#backColorInput");
buttonChangeBack.addEventListener("click", changeBackgroundColor);

const inputColor = document.querySelector("#color");
const inputButton = document.querySelector("#colorButton");
inputButton.addEventListener("click", changeColor);

const inputFontSize = document.querySelector("#fontSizeInput");
const fontSizeButton = document.querySelector("#fontSizeButton");
fontSizeButton.onclick = changeFontSize;

const lineHeightInput = document.querySelector("#lineHeight");
lineHeightInput.addEventListener("change", changeLineHeight);

const fontFamily = document.querySelector("#fontFamily");
fontFamily.addEventListener("change", changeFontFamily);

function changeBackgroundColor() {
  let teste = (body.style.backgroundColor = inputBack.value);
  localStorage.setItem("backColor", teste);
}

function changeColor() {
  let color = (body.style.color = inputColor.value);
  localStorage.setItem("color", color);
}

function changeFontSize() {
  body.style.fontSize = `${inputFontSize.value}px`;
  localStorage.setItem("fontSize", body.style.fontSize);
}

function changeLineHeight() {
  body.style.lineHeight = `${lineHeightInput.value}`;
  localStorage.setItem("lineHeight", body.style.lineHeight);
}

function changeFontFamily() {
  body.style.fontFamily = fontFamily.value;
  localStorage.setItem("fontFamily", body.style.fontFamily);
}
function inicial() {
  let back = localStorage.getItem("backColor");
  body.style.backgroundColor = back;

  let color = localStorage.getItem("color");
  body.style.color = color;

  let size = localStorage.getItem("fontSize");
  body.style.fontSize = size;

  let height = localStorage.getItem("lineHeight");
  body.style.lineHeight = height;

  let font = localStorage.getItem("fontFamily");
  body.style.fontFamily = font;
}

window.onload = function () {
  inicial();
};
