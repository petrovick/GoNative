import React, { Component } from 'react';

import {
  View, FlatList, TextInput, TouchableOpacity, Text, AsyncStorage,
} from 'react-native';
import api from '~/services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import RepositoryItem from './RepositoryItem/index';

import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

export default class Repositories extends Component {
  state = {
    data: [],
    error: '',
    loading: false,
    orgaorepositorio: '',
    refreshing: false,
  };

  async componentDidMount() {
    // AsyncStorage.clear();
    await this.listRepositories();
  }

  refreshRepository = async () => {
    this.setState({ refreshing: true });
    this.setState({ data: [] });
    const data = await AsyncStorage.getItem('@GitHub:repositories');
    const dataParsed = JSON.parse(data);
    this.setState({ data: dataParsed, refreshing: false });
  };

  searchRepository = async () => {
    try {
      const { orgaorepositorio } = this.state;
      const { data } = await api.get(`/repos/${orgaorepositorio}`);
      await AsyncStorage.setItem(
        '@GitHub:repositories',
        JSON.stringify([...this.state.data, data]),
      );

      this.setState({
        data: [...this.state.data, data],
        loading: false,
        refreshing: false,
      });
    } catch (err) {
      console.tron.log(`Organizacao/Repositorio nao encontrado, ${err}`);
      this.setState({
        error: 'Organizacao/Repositorio nao encontrado',
        loading: false,
        refreshing: false,
      });
    }
  };

  listRepositories = async () => {
    const data = await AsyncStorage.getItem('@GitHub:repositories');
    if (data) {
      this.setState({
        data: JSON.parse(data),
        loading: false,
        refreshing: false,
      });
    }
  };

  renderRepositoryItem = ({ item }) => <RepositoryItem repository={item} />;

  renderRepositoryList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderRepositoryItem}
        refreshing={refreshing}
        onRefresh={this.refreshRepository}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxSearch}>
          <TextInput
            style={styles.boxSearchInput}
            placeholder="Organizacao/Repositorio"
            onChangeText={text => this.setState({ orgaorepositorio: text })}
          />
          <TouchableOpacity style={styles.boxSearchButton} onPress={() => this.searchRepository()}>
            <Icon name="plus" />
          </TouchableOpacity>
        </View>
        {this.renderRepositoryList()}
      </View>
    );
  }
}
