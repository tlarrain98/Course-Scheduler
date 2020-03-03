let cart = {};

class Cart {
    add(item, key) {

        cart[key] = item;
    }

    getCart() {

        return cart;
    }
}

export default Cart;