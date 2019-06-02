import React, { Component } from "react";

import { View, Text } from "react-native";

import {
  Container,
  ProductImage,
  ProductName,
  ProductBrand,
  ContainerText
} from "./styles";

export default class ProductItem extends Component {
  componentDidMount() {
    const { product } = this.props;
    console.tron.log(product);
  }
  render() {
    const { product } = this.props;
    return (
      <Container>
        <ProductImage
          source={{
            uri: product.image
          }}
        />
        <ProductName>{product.name}</ProductName>
        <ProductBrand>{product.brand}</ProductBrand>
      </Container>
    );
  }
}
