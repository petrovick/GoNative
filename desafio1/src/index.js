import '~/config/ReactotronConfig';
// import './src/config/DevToolsConfig';
import '~/config/DevToolsConfig';

import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Post from './components/Post'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    posts:[
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Gabriel Petrovick Oliveira dos Santos',
        description: 'Very long description goes here 3, Very long description goes here 3, Very long description goes here 3, Very long description goes here 3, Very long description goes here 3.'
      },{
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Gabriel Petrovick Oliveira dos Santos',
        description: 'Very long description goes here 3, Very long description goes here 3, Very long description goes here 3, Very long description goes here 3, Very long description goes here 3.'
      },{
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Gabriel Petrovick Oliveira dos Santos',
        description: 'Very long description goes here 3, Very long description goes here 3, Very long description goes here 3, Very long description goes here 3, Very long description goes here 3.'
      }
    ]
  }

  componentDidMount() {
    console.tron.log(`Component montou`)
    console.tron.log(this.state.posts);
  }
  render() {
    const { posts } = this.state;
    return (
      <ScrollView style={styles.container}>
          {posts.map(post => <Post key={post.id} data={post} />)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F00',
  },
  box: {
    backgroundColor: "#FFF",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
