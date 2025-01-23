document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];

    const cart = [];

    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');

    function renderProducts() {
        if (productList) {
            productList.innerHTML = '';
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <a href="product-detail.html?id=${product.id}">View Details</a>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(productItem);
            });
        }
    }

    function renderCart() {
        if (cartList) {
            cartList.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                `;
                cartList.appendChild(cartItem);
            });
        }
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        renderCart();
    };

    window.removeFromCart = function(productId) {
        const cartItemIndex = cart.findIndex(item => item.id === productId);
        if (cartItemIndex > -1) {
            cart.splice(cartItemIndex, 1);
        }
        renderCart();
    };

    renderProducts();
    renderCart();
});
