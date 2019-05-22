import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomModal from '~/components/custommodal';

import { Creators as UserActions } from '~/store/ducks/user';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken(
  'sk.eyJ1IjoicGV0cm92aWNrZyIsImEiOiJjanZ5ZXNoMHcwZjduNDRyNnN2Mm0xOWM2In0.yidWfg8lIMjR76MgooF24g',
);
// import { Container } from './styles';
class Mapa extends Component {
  state = {
    modalVisible: false,
    dadosPesquisa: {
      coordenada: {
        latitude: 1,
        longitude: 1,
      },
      username: '',
    },
    users: [
      {
        id: '1',
        latitude: 1,
        longitude: 1,
      },
    ],
  };

  setModalVisible = () => {
    const { dadosPesquisa } = this.state;

    this.props.userSearchRequest(dadosPesquisa);

    this.setState({ modalVisible: false });
  };

  handleMapClick = e => {
    const { modalVisible } = this.state;
    this.setState({
      modalVisible: true,
      coordenadas: {
        latitude: e.geometry.coordinates[0],
        longitude: e.geometry.coordinates[1],
      },
    });
    /*
    const { users } = this.state;
    console.tron.log(users);

    users.push({
      id: '1',
      latitude: e.geometry.coordinates[0],
      longitude: e.geometry.coordinates[1],
    });

    this.setState({ users });
    */
  };

  onUsernameType = e => {
    console.tron.log(e.Text);
    //this.setState({ dadosPesquisa: { username: e.target.value } });
  };

  render() {
    const { users, modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <CustomModal
          modalVisible={modalVisible}
          setModalVisible={this.setModalVisible}
          onUsernameType={this.onUsernameType}
        />
        <MapboxGL.MapView
          centerCoordinate={[-49.6446024, -27.2108001]}
          style={styles.container}
          showUserLocation
          styleURL={MapboxGL.StyleURL.Dark}
          onPress={this.handleMapClick}
        >
          {this.props.User.data.map(user => (
            <MapboxGL.PointAnnotation id="rocketseat" coordinate={[user.latitude, user.longitude]}>
              <View style={styles.annotationContainer}>
                <View style={styles.annotationFill} />
              </View>
              <MapboxGL.Callout title="Rocketseat House" />
            </MapboxGL.PointAnnotation>
          ))}
        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7159C1',
    transform: [{ scale: 0.8 }],
  },
});

mapStateToProps = state => ({
  User: state.User,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mapa);
