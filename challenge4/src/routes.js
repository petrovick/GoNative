import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Main from "~/pages/Main";
import Cart from "~/pages/Cart";
import Product from "~/components/Product";

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main: createStackNavigator(
        {
          Main,
          Product
        },
        {
          defaultNavigationOptions: {
            header: null
          }
        }
      ),
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
