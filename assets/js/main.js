
const getData = async (url) =>{
  
  const {data} = await axios.get(url);
  return data;
}

const displayCategories = async () =>{
  const categories = await getData('https://dummyjson.com/products/category-list');
  const result = categories.map( category =>{
    return `
    
        <a class="category" href="categoryDetails.html?category=${category}">${category}</a>
        
    
    `
  }).join(' ');
  
  document.querySelector(".categories .row").innerHTML = result;
}

const displayProducts = async () => {
  const all_products = await getData('https://dummyjson.com/products');
  
  const result = all_products.products.map(product => {
  return `
      <div class="product"> 
        <img src="${product.thumbnail}" alt="${product.description}"/>
        <h3> ${product.title} </h3>
        
      </div>
  `
  }).join(' ');
  
  document.querySelector(".products .row").innerHTML = result;
}

displayCategories();
displayProducts();
