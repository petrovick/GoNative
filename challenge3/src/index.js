import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

import { setNavigator } from './services/navigation';


const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
