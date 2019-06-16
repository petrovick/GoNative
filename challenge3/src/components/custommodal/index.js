import React, { Component } from "react";
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
    Alert,
    TextInput
} from "react-native";
import styles from "./styles";

const CustomModal = ({
    modalVisible,
    salvarModal,
    onUsernameType,
    fecharModal
}) => (
    <Modal
        transparent
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        animationType="slide"
    >
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onUsernameType}
                    placeholderTextColor={styles.placeholder.color}
                />

                <View style={styles.buttonContainerView}>
                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.save]}
                        onPress={() => {
                            salvarModal();
                        }}
                    >
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.cancel]}
                        onPress={() => {
                            fecharModal();
                        }}
                    >
                        <Text style={styles.buttonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
);
export default CustomModal;
