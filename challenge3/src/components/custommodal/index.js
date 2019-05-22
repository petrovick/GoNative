import React, { Component } from 'react';
import {
  Modal, Text, TouchableHighlight, View, Alert, TextInput,
} from 'react-native';

const CustomModal = ({ modalVisible, setModalVisible, onUsernameType }) => (
  <View style={{ marginTop: 22 }}>
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={{ marginTop: 22 }}>
        <View>
          <TextInput onChange={e => onUsernameType(e)} />
          <TouchableHighlight
            onPress={() => {
              setModalVisible();
            }}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  </View>
);
export default CustomModal;
