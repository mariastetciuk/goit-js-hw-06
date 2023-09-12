const categoriesEl = document.querySelector(`#categories`);
console.log('Number of categories: ', categoriesEl.children.length);

const itemEl = categoriesEl.querySelectorAll('.item');

itemEl.forEach((item) => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});
const userA = {
  name: 'Mango',
  age: 5,
  };
  
  const userB = {
  ...userA,
  age: 10,
  happy: true,
  };
  
  console.log(userB);