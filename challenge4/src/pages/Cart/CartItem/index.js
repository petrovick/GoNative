import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartActions from "~/store/ducks/cart";

import {
  Container,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductBrand,
  ProductPrice,
  CartQuantity,
  RemoveIcon
} from "./styles";

class CartItem extends Component {
  componentDidMount = () => {
    const { cartItem } = this.props;
  };

  handleQuantityChange = text => {
    const { cartItem, addQuantity } = this.props;
    addQuantity({
      product: cartItem.product,
      quantity: text
    });
  };

  handleRemoveCartItem = () => {
    const { cartItem, removeProduct } = this.props;
    removeProduct(cartItem);
  };

  render() {
    const { cartItem } = this.props;
    return (
      <Container>
        <ProductImage source={{ uri: cartItem.product.image }} />
        <ProductDetails>
          <ProductName>
            <Text>{cartItem.product.name}</Text>
          </ProductName>
          <ProductBrand>
            <Text>{cartItem.product.brand}</Text>
          </ProductBrand>
          <ProductPrice>
            <Text>{cartItem.product.price}</Text>
          </ProductPrice>
        </ProductDetails>
        <CartQuantity onChangeText={text => this.handleQuantityChange(text)}>
          {cartItem.quantity}
        </CartQuantity>
        <TouchableOpacity onPress={this.handleRemoveCartItem}>
          <RemoveIcon name="delete" />
        </TouchableOpacity>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
