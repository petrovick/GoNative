import styled from "styled-components/native";

import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  margin-top: 10px;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  width: 69px;
  height: 100px;
  margin: 5px;
`;

export const ProductDetails = styled.View`
  justify-content: center;
`;
export const ProductName = styled.Text``;
export const ProductBrand = styled.Text``;
export const ProductPrice = styled.Text``;
export const CartQuantity = styled.TextInput`
  width: 40px;
  align-self: center;
  border: 1px solid #666;
  color: #666;
`;
export const RemoveIcon = styled(Icon).attrs({
  color: "#000",
  size: 32
})`
  align-self: center;
  justify-content: flex-end;
`;
