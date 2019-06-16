import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const Container = styled.View`
  flex: 1;
  background-color: #c4c4c4;
`;

export const ProductDetails = styled.View`
  margin-top: ${getStatusBarHeight() + 10}px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #fff;
`;
export const ProductImage = styled.Image`
  width: 276px;
  height: 400px;
  align-self: center;
`;

export const ProductTextSubDetails = styled.View``;

export const ProductTextDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const ProductBrand = styled.Text`
  font-size: 12px;
  color: #d2d2d2;
`;
export const ProductPrice = styled.Text`
  color: #84c8b5;
  font-weight: bold;
`;
export const ProdutAddButton = styled.TouchableOpacity`
  background-color: #84c8b5;
  margin: 10px;
  border-radius: 3px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ProductButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
