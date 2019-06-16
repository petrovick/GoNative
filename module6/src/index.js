import "~/config/ReactotronConfig.js";
import "~/config/StatusBarConfig";

import React from "react";

import CodePush from "react-native-code-push";

import { Provider } from "react-redux";
import { View } from "react-native";
import store from "~/store";
import Routes from "~/routes";
import Player from "./components/Player";

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);
export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App);
