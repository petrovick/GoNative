import React, { Component } from 'react';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class IssueItem extends Component {
  componentWillMount() {
    const { issue } = this.props;
  }

  onIssuePress = () => {
    const { issue } = this.props;
    // https://facebook.github.io/react-native/docs/linking#openurl
    // Linking.openURL(url).catch((err) => console.error('An error occurred', err));

    Linking.canOpenURL(issue.html_url).then((supported) => {
      if (supported) {
        Linking.openURL(issue.html_url);
      } else {
        console.log(`Don't know how to open URI: ${issue.html_url}`);
      }
    });
  };

  render() {
    const { issue } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: issue.user.avatar_url }} />

        <View style={styles.containerText}>
          <Text style={styles.titleText} ellipsizeMode="tail" numberOfLines={1}>
            {issue.title}
          </Text>
          <Text style={styles.loginText}>{issue.user.login}</Text>
        </View>
        <Icon style={styles.icon} name="chevron-right" onPress={() => this.onIssuePress()} />
      </View>
    );
  }
}
