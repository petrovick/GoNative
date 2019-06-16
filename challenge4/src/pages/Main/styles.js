import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const Container = styled.View`
  flex: 1;
  background-color: #c4c4c4;
`;
export const CategoryHeader = styled.View`
  background-color: #f557;
  margin-top: ${getStatusBarHeight()};
  height: 50px;
`;

export const CategoryList = styled.FlatList.attrs({
  contentContainerStyle: {
    alignItems: "center"
  }
})`
  flex: 1;
`;

export const CategoryItemText = styled.Text`
  color: #fff;
`;

export const CategoryItemContainer = styled.TouchableOpacity`
  margin-left: 20px;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
