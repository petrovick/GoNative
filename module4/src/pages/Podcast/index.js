import React, { Component } from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

import { View } from "react-native";

import {
  Container,
  Episode,
  Title,
  Author,
  EpisodeList,
  PodcastDetails,
  Background,
  Cover,
  BackButton,
  PodcastTitle,
  PlayButton,
  PlayButtonText
} from "./styles";

export default class Podcast extends Component {
  componentDidMount() {}
  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
  render() {
    const { navigation } = this.props;
    const podcast = navigation.getParam("podcast");

    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />

              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={24} color={`#FFF`} />
              </BackButton>

              <Cover source={{ uri: podcast.cover }} />
              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PlayButton onPress={() => {}}>
                <PlayButtonText>Reproduzir</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}
