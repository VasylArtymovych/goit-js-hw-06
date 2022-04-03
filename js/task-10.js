

const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  parentBox: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreaBtnClic);
refs.destroyBtn.addEventListener('click', () => {
  refs.parentBox.innerHTML = '';
  refs.input.value = '';
});

function onCreaBtnClic() {
  let inputValue = refs.input.value;
  creatBoxes(inputValue);
};



function creatBoxes(inputValue) { 
  const listWidthHeigth = [30, 30];
  const arrOfBoxes = [];

  for (let i = 1; i <= inputValue; i += 1){
    let color = getRandomHexColor();
    
    const box = document.createElement('div');
  box.style.width = listWidthHeigth[0] + 'px';
  box.style.height = listWidthHeigth[1] + 'px';
    box.style.backgroundColor = color;
    arrOfBoxes.push(box);
    listWidthHeigth[0] += 10;
    listWidthHeigth[1] += 10;
  }
  refs.parentBox.append(...arrOfBoxes);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
