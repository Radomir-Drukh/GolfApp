import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const TextListInfoItem = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.h3}>{text}</Text>
    </View>
  );
};

export default TextListInfoItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 15,
  },
  circle: {
    backgroundColor: "#3171D3",
    height: 8,
    width: 8,
    borderRadius: 4,
    marginTop: 10,
  },
  h1: {
    fontSize: 28,
    marginTop: 10,
    marginHorizontal: 15,
  },
  h2: {
    fontSize: 20,
    marginHorizontal: 15,
    marginTop: 10,
  },
  h3: {
    fontSize: 14,
    marginHorizontal: 15,
    marginTop: 10,
    color: "#000000",
    opacity: 0.6,
  },
  h4: {
    fontSize: 12,
    marginTop: 10,
    marginHorizontal: 15,
    color: "#000000",
    opacity: 0.6,
  },
});
