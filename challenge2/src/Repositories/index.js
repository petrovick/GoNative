import React, { Component } from 'react';

import {
  View, FlatList, TextInput, TouchableOpacity, Text,
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
    orgaorepositorio: 'react-community/react-navigation',
    refreshing: false,
  };

  componentDidMount() {}

  listRepositories = async () => {
    try {
      const { orgaorepositorio } = this.state;

      const { data } = await api.get(`/repos/${orgaorepositorio}`);

      this.setState({
        data: [...this.state.data, data],
        loading: false,
        refreshing: false,
      });
    } catch (err) {
      this.setState({
        error: 'Organizacao/Repositorio nao encontrado',
        loading: false,
        refreshing: false,
      });
    }
  };

  renderRepositoryItem = ({ item }) => {
    console.tron.log('item');
    console.tron.log(item);
    console.tron.log('item 2');
    return <RepositoryItem repository={item} />;
  };

  renderRepositoryList = () => {
    const { data } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderRepositoryItem}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxSearch}>
          <TextInput
            placeholder="Organizacao/Repositorio"
            onChange={text => this.setState({ orgaorepositorio: text })}
          />
          <TouchableOpacity onPress={this.listRepositories}>
            <Icon name="building" />
          </TouchableOpacity>
        </View>
        {this.renderRepositoryList()}
      </View>
    );
  }
}
