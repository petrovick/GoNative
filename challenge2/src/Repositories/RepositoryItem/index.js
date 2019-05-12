import React from 'react';

import { View, Image, Text } from 'react-native';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View>
    <View>
      <Text>{repository.name}</Text>
      <Text>{repository.name}</Text>
    </View>
  </View>
);

export default RepositoryItem;
