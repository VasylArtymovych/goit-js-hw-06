function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  displayColor: document.querySelector('.color'),
  changeBgrColorBtn: document.querySelector('.change-color'),
}

refs.changeBgrColorBtn.addEventListener('click', onChangeBgrColorBtnClick);

function onChangeBgrColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.displayColor.textContent = getRandomHexColor();
}
