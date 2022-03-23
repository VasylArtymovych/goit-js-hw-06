const categoriesListRef = document.querySelector('#categories');

const numberOfCategories = categoriesListRef.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categorieslistItemsRef = categoriesListRef.querySelectorAll('.item');

const displayCategoryNameCountItems = categorieslistItemsRef.forEach(category => {
    const categoryName = category.querySelector('h2')
    console.log(`Category: ${categoryName.textContent}`);
    
    const categoryList = category.querySelector('ul');
    const countCategoryListItems = categoryList.children.length;
    console.log(`Elements: ${countCategoryListItems}`);
});
