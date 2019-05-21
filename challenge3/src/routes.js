import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Mapa from './pages/mapa';

const Routes = createAppContainer(
  createSwitchNavigator({
    Mapa,
  }),
);

export default Routes;
