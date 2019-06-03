import React, { Component } from "react";

import { View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CategoriesActions from "~/store/ducks/categories";
import ProductsActions from "~/store/ducks/products";

import Products from "~/components/Products";

import {
  Container,
  CategoryHeader,
  CategoryList,
  CategoryItemText,
  CategoryItemContainer
} from "./styles";

class Main extends Component {
  componentDidMount() {
    const { loadCatRequest } = this.props;
    loadCatRequest();
  }

  handleSelectCategory = category => {
    //console.tron.log("cat pressed");
    console.tron.log(this.props);
    const { setSelectedCategory } = this.props;
    setSelectedCategory(category);
  };

  render() {
    const { categories } = this.props;
    return (
      <Container>
        <CategoryHeader>
          <CategoryList
            keyExtractor={item => String(item.id)}
            horizontal={true}
            data={categories.data}
            renderItem={({ item: category }) => (
              <CategoryItemContainer
                title=""
                onPress={() => this.handleSelectCategory(category)}
              >
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

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductsActions, ...CategoriesActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
