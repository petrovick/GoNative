import React, { Component } from "react";

import { View, StyleSheet, Image, Text } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CustomModal from "~/components/custommodal";

import styles from "./styles";

import { Creators as UserActions } from "~/store/ducks/user";

import MapboxGL from "@mapbox/react-native-mapbox-gl";

MapboxGL.setAccessToken(
    "sk.eyJ1IjoicGV0cm92aWNrZyIsImEiOiJjanZ5ZXNoMHcwZjduNDRyNnN2Mm0xOWM2In0.yidWfg8lIMjR76MgooF24g"
);
// import { Container } from './styles';
class Mapa extends Component {
    state = {
        modalVisible: false,
        dadosPesquisa: {
            coordenada: {
                latitude: 1,
                longitude: 1
            },
            username: ""
        }
    };

    salvarModal = () => {
        const { dadosPesquisa } = this.state;
        console.tron.log(dadosPesquisa);
        this.props.userSearchRequest(dadosPesquisa);

        this.setState({ modalVisible: false });
    };

    fecharModal = () => {
        const { dadosPesquisa } = this.state;
        console.tron.log(dadosPesquisa);
        this.props.userSearchRequest(dadosPesquisa);

        this.setState({ modalVisible: false });
    };

    handleMapClick = e => {
        const { dadosPesquisa } = this.state;
        dadosPesquisa.coordenada.latitude = e.geometry.coordinates[0];
        dadosPesquisa.coordenada.longitude = e.geometry.coordinates[1];

        this.setState({
            modalVisible: true,
            dadosPesquisa
        });
    };

    onUsernameType = text => {
        const { dadosPesquisa } = this.state;
        dadosPesquisa.username = text;
        this.setState({ dadosPesquisa: dadosPesquisa });
    };

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.container}>
                <CustomModal
                    modalVisible={modalVisible}
                    salvarModal={this.salvarModal}
                    fecharModal={this.fecharModal}
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
                        <MapboxGL.PointAnnotation
                            id={String(user.user.id)}
                            coordinate={[user.latitude, user.longitude]}
                        >
                            <Image
                                style={styles.avatar}
                                source={{ uri: user.user.avatar_url }}
                            />
                            <MapboxGL.Callout title={user.user.name}>
                                <View style={styles.calloutContainer}>
                                    <Text>{user.user.name}</Text>
                                    {user.user.bio && (
                                        <Text>{user.user.bio}</Text>
                                    )}
                                </View>
                            </MapboxGL.Callout>
                        </MapboxGL.PointAnnotation>
                    ))}
                </MapboxGL.MapView>
            </View>
        );
    }
}

mapStateToProps = state => ({
    User: state.User
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(UserActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mapa);
