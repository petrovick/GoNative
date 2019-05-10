import React from "react";
import { View, Text, StyleSheet, TextArea } from "react-native";
import PropTypes from "prop-types";

const Post = ({ data }) => (
  <View style={styles.box}>
    <View style={styles.boxTitle}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
    </View>
    <Text style={styles.boxText}>{data.description}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
  }).isRequired
}

const styles = StyleSheet.create({
  /*text: {
    ...Platform.select({
      ios: {
        fontWeight: "bold"
      },
      android: {
        fontWeight: "bold"
      }
    })
  },*/
  box: {
    backgroundColor: "#FFF",
    marginTop: 20,
    marginHorizontal: 20,
    height: 200,
    borderRadius: 5
  },
  boxTitle: {
  },
  title: {
    fontWeight: `bold`,
    margin: 10,
    fontSize: 15
  },
  author: {
    margin: 10,
    color: `#333`
  },
  boxText: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  }
});
export default Post;
