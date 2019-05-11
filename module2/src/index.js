import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';

import '~/config/ReactotronConfig';
import createNavigator from './routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };
  async componentDidMount() {
    const username = await AsyncStorage.getItem('@GitHuber:username');
    this.setState({
      userChecked: true,
      userLogged: !!username, //!! troca o valor pra booleano
    });
  }
  render() {
    const { userChecked, userLogged } = this.state;
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
