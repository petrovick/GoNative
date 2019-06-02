import React, { Component } from "react";

import { View, TouchableOpacity } from "react-native";

import Products from "~/components/Products";

import {
  Container,
  CategoryHeader,
  CategoryList,
  CategoryItemText,
  CategoryItemContainer
} from "./styles";

export default class Main extends Component {
  state = {
    Categories: [
      { id: 1, title: "Camisetas" },
      { id: 2, title: "Camisas" },
      { id: 3, title: "Calcas" },
      { id: 4, title: "Blusas" },
      { id: 5, title: "Bones" },
      { id: 6, title: "Casacos" }
    ]
  };
  render() {
    const { Categories } = this.state;
    return (
      <Container>
        <CategoryHeader>
          <CategoryList
            keyExtractor={item => String(item.id)}
            horizontal={true}
            data={Categories}
            renderItem={({ item: category }) => (
              <CategoryItemContainer>
                <CategoryItemText>{category.title}</CategoryItemText>
              </CategoryItemContainer>
            )}
          />
        </CategoryHeader>

        <Products />
      </Container>
    );
  }
}
