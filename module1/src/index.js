import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Platform
} from "react-native";
import Todo from "./components/todo";

import "./config/ReactotronConfig";
import "./config/DevToolsConfig";
import { bold } from "ansi-colors";

export default class App extends Component {
  componentDidMount() {}

  state = {
    usuario: "Petrovick",
    todos: [{ id: 0, text: "Fazer café" }, { id: 1, text: "Estudar GoNative!" }]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random, text: "Novo Todo!" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" ? <Text>iOS</Text> : <Text>Android</Text>}
        <Todo style="Fazer café" />
        <Todo style="Estudar o GoNative" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: "bold"
      },
      android: {
        fontWeight: "bold"
      }
    })
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center"
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: "#F00",
    margin: 10,

    transform: [{ rotateZ: "20deg" }]
  },
  boxText: {
    color: "#FFFF"
  }
});
