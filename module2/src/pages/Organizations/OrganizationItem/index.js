import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const OrganizationItem = ({ organization }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: organization.avatar }} />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);
OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }),
};
export default OrganizationItem;
