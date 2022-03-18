const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createlistItem = (item) => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = item;
  return listItem;
}

const listItems = ingredients.map(createlistItem);

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...listItems);