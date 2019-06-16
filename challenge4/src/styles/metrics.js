import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default {
  baseMargin: 5,
  basePadding: 10,
  baseRadius: 3,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  fontSizeUp: 12,
  fontSizeDown: 10
};
