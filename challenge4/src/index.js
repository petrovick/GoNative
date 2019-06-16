import "~/config/ReactotronConfig.js";

import React, { Component } from "react";
import { Provider } from "react-redux";
import { Platform, StyleSheet, Text, View } from "react-native";
import store from "~/store";
import Routes from "~/routes";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
