import React, { Component } from 'react';

import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';

import styles from './styles';
import IssueItem from './IssueItem';
import api from '~/services/api';

export default class Issues extends Component {
  state = {
    issues: [],
    issueSituations: ['Todas', 'Abertas', 'Fechadas'],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository', '');
    console.tron.log(repository);
    const { data } = await api.get(`/repos/${repository}/issues`);
    console.tron.log(data);
    this.setState({
      issues: data,
    });
  }

  renderIssueItem = ({ item }) => {
    console.tron.log('renderIssueItem = ({ item }) => {');
    console.tron.log(item);
    return <IssueItem issue={item} />;
  };

  listIssues = () => {
    const { issues } = this.state;
    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderIssueItem}
      />
    );
  };

  filterIssues(type) {}

  render() {
    const { issueSituations } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          {issueSituations.map(item => (
            <TouchableOpacity onPress={this.filterIssues(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>{this.listIssues()}</View>
      </View>
    );
  }
}
