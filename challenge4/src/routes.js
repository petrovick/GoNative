import React from "react";

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

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
      defaultNavigationOptions: ({ navigation }) => ({
        header: null,

        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          //let IconComponent = Icon;
          let iconName;
          if (routeName === "Main") {
            iconName = "home"; //`home${focused ? '' : '-outline'}`;
            // Sometimes we want to add badges to some icons.
            // You can check the implementation below.
            //IconComponent = HomeIconWithBadge;
          } else if (routeName === "Cart") {
            iconName = `shop`;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={15} color={tintColor} />;
        }
      })
    }
  )
);

export default Routes;
