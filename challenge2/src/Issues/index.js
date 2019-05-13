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
    issuesFiltered: [],
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
      issuesFiltered: data,
    });
  }

  renderIssueItem = ({ item }) => <IssueItem issue={item} />;

  listIssues = () => {
    const { issuesFiltered } = this.state;
    return (
      <FlatList
        data={issuesFiltered}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderIssueItem}
      />
    );
  };

  filterIssues(type) {
    console.tron.log(type);
    const { issues } = this.state;
    if (type === 'Abertas') {
      const issuesfil = issues.filter(item => item.state == 'open');
      console.tron.log(issuesfil);
      this.setState({ issuesFiltered: issuesfil });
    } else if (type === 'Fechadas') {
      this.setState({ issuesFiltered: issues.filter(item => item.state == 'closed') });
    } else {
      this.setState({ issuesFiltered: issues });
    }
  }

  render() {
    const { issueSituations } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          {issueSituations.map(item => (
            <TouchableOpacity
              style={styles.button}
              key={item}
              onPress={() => this.filterIssues(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>{this.listIssues()}</View>
      </View>
    );
  }
}
