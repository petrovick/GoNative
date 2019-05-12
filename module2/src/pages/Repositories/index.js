import React, { Component } from 'react';

import { View, Text, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import api from '~/services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

import styles from './styles';
import RepositoryItem from './RepositoryItem';

// AsyncStorage.clear();

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }
  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem('@GitHuber:username');

    const { data } = await api.get(`/users/${username}/repos`);
    this.setState({ data, loading: false, refreshing: false });
  };
  renderListItem = ({ item }) => {
    return <RepositoryItem repository={item} />;
  };

  renderList = () => {
    const { data, refreshing } = this.state;
    console.tron.log('renderList = () => {');
    console.tron.log(data);
    try {
      return (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadRepositories}
          refreshing={refreshing}
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
        <Header title="Repositorios" />

        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
