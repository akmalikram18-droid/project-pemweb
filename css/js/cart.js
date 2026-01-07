// Ambil cart dari localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Simpan cart ke localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Tambah barang ke cart
function addToCart(name, price) {
    let cart = getCart();

    const itemIndex = cart.findIndex(item => item.name === name);

    if (itemIndex > -1) {
        cart[itemIndex].qty += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    saveCart(cart);
    alert(name + " berhasil ditambahkan ke keranjang");
}

// Update angka di navbar
function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    const cartBadge = document.getElementById("cart-count");
    if (cartBadge) {
        cartBadge.textContent = totalQty;
    }
}

// Load saat halaman dibuka
document.addEventListener("DOMContentLoaded", updateCartCount);
