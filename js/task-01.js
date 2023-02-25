const categoriesEl = document.querySelector(`#categories`);
console.log('Number of categories: ', categoriesEl.children.length);

const itemEl = categoriesEl.querySelectorAll('.item');

itemEl.forEach((item) => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});
