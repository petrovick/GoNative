import styled from "styled-components/native";

export const Container = styled.View`
  /*flex: 1;*/
`;

export const ContainerProducts = styled.FlatList.attrs({
  columnWrapperStyle: {
    marginHorizontal: 10,
    justifyContent: "space-between"
  }
})``;
