import React from 'react';

class CartItem extends React.Component {
  render() {
    return(
      <>
        <div>
          <b>{this.props.data.name}</b>
          <br />
          {this.props.data.number}
          <br />
          Credits:{this.props.data.credits}
        </div>
        <br />
      </>
    )
  }
}

export default CartItem;