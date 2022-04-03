

const refs = {
  displayColor: document.querySelector('.color'),
  changeBgrColorBtn: document.querySelector('.change-color'),
}

refs.changeBgrColorBtn.addEventListener('click', onChangeBgrColorBtnClick);

function onChangeBgrColorBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.displayColor.textContent = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};