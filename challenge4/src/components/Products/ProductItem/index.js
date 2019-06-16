import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { withNavigation, navigattion } from "react-navigation";

import {
  Container,
  ProductImage,
  ProductName,
  ProductBrand,
  ContainerText
} from "./styles";
class ProductItem extends Component {
  componentDidMount() {
    const { product } = this.props;
    console.tron.log(product);
  }

  handleProductClick = () => {
    const { navigation, repository, product } = this.props;
    navigation.navigate("Product", {
      product: product
    });
  };

  render() {
    const { product } = this.props;
    return (
      <Container>
        <TouchableOpacity onPress={this.handleProductClick}>
          <ProductImage
            source={{
              uri: product.image
            }}
          />
          <ProductName>{product.name}</ProductName>
          <ProductBrand>{product.brand}</ProductBrand>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default withNavigation(ProductItem);
