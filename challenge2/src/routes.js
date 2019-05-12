import { createAppContainer, createStackNavigator } from 'react-navigation';

import Repositories from './Repositories/index';
import Issues from './Issues/index';

const Routes = createAppContainer(
  createStackNavigator({
    Repositories,
    Issues,
  }),
);

export default Routes;
