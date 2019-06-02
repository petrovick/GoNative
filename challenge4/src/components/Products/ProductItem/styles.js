import styled from "styled-components/native";
import { metrics, colors } from "~/styles";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 3px;
  padding: 5px;
  margin-top: 10px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 92px;
  height: 133px;
`;

export const ProductName = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export const ProductBrand = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #333;
`;
