let products = [
    { id: 1, name: 'Product 1', category: 'vps', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', category: 'panel', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', category: 'script', image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Product 4', category: 'vps', image: 'https://via.placeholder.com/200' },
    { id: 5, name: 'Product 5', category: 'panel', image: 'https://via.placeholder.com/200' },
    { id: 6, name: 'Product 6', category: 'script', image: 'https://via.placeholder.com/200' },
    { id: 7, name: 'Product 7', category: 'vps', image: 'https://via.placeholder.com/200' },
    { id: 8, name: 'Product 8', category: 'panel', image: 'https://via.placeholder.com/200' },
    { id: 9, name: 'Product 9', category: 'script', image: 'https://via.placeholder.com/200' },
    { id: 10, name: 'Product 10', category: 'vps', image: 'https://via.placeholder.com/200' },
    { id: 11, name: 'Product 11', category: 'panel', image: 'https://via.placeholder.com/200' },
    { id: 12, name: 'Product 12', category: 'script', image: 'https://via.placeholder.com/200' },
    // Tambahkan produk lainnya jika perlu
];

let displayedProducts = 0;
const productsPerLoad = 10;

function loadMore() {
    const productList = document.getElementById('product-list');
    let loadedProducts = 0;

    for (let i = displayedProducts; i < products.length && loadedProducts < productsPerLoad; i++) {
        const product = products[i];
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
        `;
        productList.appendChild(productElement);

        // Add delay to show products one by one
        setTimeout(() => {
            productElement.classList.add('show');
        }, 100 * (i - displayedProducts));

        displayedProducts++;
        loadedProducts++;
    }

    if (displayedProducts >= products.length) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
}

function filterProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    displayedProducts = 0;

    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

    filteredProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
        `;
        productList.appendChild(productElement);

        // Add delay to show products with animation
        setTimeout(() => {
            productElement.classList.add('show');
        }, 100 * index); // Delay for each product
    });

    document.getElementById('load-more-btn').style.display = filteredProducts.length > productsPerLoad ? 'block' : 'none';
}

window.onload = function() {
    loadMore();  // Load initial products
};
