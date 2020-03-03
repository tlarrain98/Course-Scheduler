import React from 'react';
import Cart from './Cart';
import CartItem from './CartItem';

class CartArea extends React.Component {
  constructor() {
    super();
    this.items = new Cart();
  }

  getItems() {

      let cart = this.items.getCart();  
      let cart2 = [];

      if(Object.entries(cart).length === 0 && cart.constructor === Object) {
        return "No courses have been added to the cart.";
      }
      for(const item of Object.entries(cart)) {
        cart2.push(
          <CartItem key={item[0]} 
                    data={item[1]}/>
        )
      }

      return cart2;
  }

  render() {
    return(
      <div>
        {this.getItems()}
      </div>
    )
  }
}

export default CartArea;