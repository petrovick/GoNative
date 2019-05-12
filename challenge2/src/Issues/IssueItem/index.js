import React, { Component } from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class IssueItem extends Component {
  componentWillMount() {
    const { issue } = this.props;
  }

  render() {
    const { issue } = this.props;
    return (
      <View>
        <View>
          <Image source={{ uri: issue.user.avatar_url }} />
        </View>
        <View>
          <Text>{issue.title}</Text>
          <Text>{issue.user.login}</Text>
        </View>
        <Icon name="chevron-right" />
      </View>
    );
  }
}
