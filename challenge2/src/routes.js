import { createAppContainer, createStackNavigator } from "react-navigation";

import Repositories from "./Repositories/index";

const Routes = createAppContainer(
    createStackNavigator({
        Repositories
    })
);

export default Routes;
