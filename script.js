let products = [
    {   
        name: 'Laptop',
        category: 'electronics',
        price: 800,
        imgSrc: '/Products/laptop.jpg'
    },

    {   
        name: 'T-shirt',
        category: 'clothing',
        price: 20,
        imgSrc: '/Products/T-Shirt.jpg'
    },

    {   
        name: 'Nike',
        category: 'clothing',
        price: 50,
        imgSrc: '/Products/Nike.jpg'
    },
    {   
        name: 'Addidas',
        category: 'clothing',
        price: 60,
        imgSrc: '/Products/addidas.jpg'
    },
    {   
        name: 'Gaming PC',
        category: 'electronics',
        price: 1500,
        imgSrc: '/Products/GamingPC.jpg'
    },
    {
        name: 'Office PC',
        category: 'electronics',
        price: 300,
        imgSrc:'/Products/OfficePC.jpg'

    }

];

let productList = document.getElementById('product-list');

function sortByPrice(order) {
    let sortedProducts = [...products];

    if (order === 'ascending') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    renderProducts(sortedProducts);
  
}
renderProducts(products);

function filterByCategory(category) {
    let filteredProducts = category === 'all' ? products : products.filter(product => product.category === category)
    renderProducts(filteredProducts)
}

function renderProducts(productsToRender) {
    productList.innerHTML = ''

    productsToRender.forEach(product => {
        let productElement = document.createElement('div')
        productElement.classList.add('product')

        productElement.classList.remove('product')

        productElement.innerHTML = `
        <img src='${product.imgSrc}'>
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p>$${product.price}</p>
        `
        productList.appendChild(productElement)
    });
}


alert()