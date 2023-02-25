const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeListIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const items = makeListIngredients(ingredients);

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...items);
