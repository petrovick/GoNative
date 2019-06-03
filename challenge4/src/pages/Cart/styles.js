import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const Container = styled.View`
  flex: 1;
  background-color: #c4c4c4;
  margin-top: ${getStatusBarHeight()}px;
`;

export const CartList = styled.FlatList``;

export const CartTotalContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const CardSubTotal = styled.Text`
  font-size: 18px;
  color: #c4c4c4;
  margin-top: 30px;
`;
export const CardTotal = styled.Text`
  font-size: 22px;
  color: #84c8b5;
  margin-bottom: 30px;
`;
