import styled from "styled-components/native";

export const Container = styled.View`
  /*flex: 1;*/
`;

export const ContainerProducts = styled.FlatList.attrs({
  columnWrapperStyle: {
    justifyContent: "space-between"
  }
})`
  margin-left: 10px;
  margin-right: 10px;
`;
