import React, { Component } from "react";

import { View, Text } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartActions from "~/store/ducks/cart";

import {
  Container,
  ProductDetails,
  ProductImage,
  ProductTextDetails,
  ProductTextSubDetails,
  ProductName,
  ProductBrand,
  ProductPrice,
  ProdutAddButton,
  ProductButtonText
} from "./styles";

class Product extends Component {
  state = {
    product: {}
  };
  componentDidMount = () => {
    const { navigation } = this.props;
    const product = navigation.getParam("product", "");
    this.setState({ product });
  };

  handleAddProductToCart = () => {
    const { addQuantity } = this.props;
    const { product } = this.state;

    addQuantity({
      product: product,
      quantity: 1
    });
  };

  render() {
    const { product } = this.state;
    return (
      <Container>
        <ProductDetails>
          <ProductImage source={{ uri: product.image }} />
          <ProductTextDetails>
            <ProductTextSubDetails>
              <ProductName>{product.name}</ProductName>
              <ProductBrand>{product.brand}</ProductBrand>
            </ProductTextSubDetails>
            <ProductPrice>R$ {product.price}</ProductPrice>
          </ProductTextDetails>
          <ProdutAddButton onPress={this.handleAddProductToCart}>
            <ProductButtonText>Adicionar ao Carrinho</ProductButtonText>
          </ProdutAddButton>
        </ProductDetails>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Product);
