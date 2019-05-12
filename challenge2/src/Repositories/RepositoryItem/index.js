import React, { Component } from 'react';

import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation, navigattion } from 'react-navigation';
import styles from './styles';

class RepositoryItem extends Component {
  onRepositoryClick = () => {
    const { navigation, repository } = this.props;
    navigation.navigate('Issues', {
      repository: repository.full_name,
    });
  };

  render() {
    const { repository } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: repository.owner.avatar_url }} />
        <View style={styles.boxReposDetails}>
          <Text>{repository.name}</Text>
          <Text>{repository.owner.login}</Text>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => this.onRepositoryClick()}>
            <Icon name="chevron-right" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(RepositoryItem);
