import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Main from "~/pages/Main";
import Cart from "~/pages/Cart";

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main,
      Cart
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default Routes;
