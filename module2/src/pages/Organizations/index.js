import React, { Component } from 'react';

import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';
import OrganizationItem from './OrganizationItem';
import Header from '~/components/Header';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrganizations();
  }
  loadOrganizations = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem('@GitHuber:username');

    const { data } = await api.get(`/users/${username}/orgs`);
    console.tron.log('data');
    console.tron.log(data);
    this.setState({ data, loading: false, refreshing: false });
  };
  renderListItem = ({ item }) => {
    <OrganizationItem organization={item} />;
  };

  renderList = () => {
    const { data, refreshing } = this.state;
    try {
      return (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadOrganizations}
          refreshing={refreshing}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      );
    } catch (err) {
      console.tron.log(`Entrou no erro`);
    }
  };
  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Organizacoes" />

        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
