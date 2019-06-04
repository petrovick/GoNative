import React, { Component } from "react";

import { View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartActions from "~/store/ducks/cart";

import CartItem from "./CartItem";

import {
  Container,
  CartList,
  CartTotalContainer,
  CardSubTotal,
  CardTotal
} from "./styles";
class Cart extends Component {
  render() {
    const { cart, subTotalCart } = this.props;
    return (
      <Container>
        <CartList
          renderItem={({ item: cartItem }) => <CartItem cartItem={cartItem} />}
          data={cart.data}
        />
        <CartTotalContainer>
          <CardSubTotal>Subtotal</CardSubTotal>
          <CardTotal>R${subTotalCart}</CardTotal>
        </CartTotalContainer>
      </Container>
    );
  }
}
function SumSubTotal(cartItems) {
  console.tron.log("function SumSubTotal(cartItems) {");
  console.tron.log(cartItems);
  if (cartItems && cartItems.length == 1) {
    return cartItems[0].quantity * cartItems[0].product.price;
  } else if (cartItems.lenght > 0) {
    const subTotalCart = cartItems.reduce(function(a, b) {
      return (
        parseInt(a || 0) +
        parseInt(b.quantity || 0) * parseFloat(b.product.price || 0)
      ); //* b.product.price;
    });
  } else {
    return 0;
  }
}
const mapStateToProps = state => ({
  cart: state.cart,
  subTotalCart: SumSubTotal(state.cart.data)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
