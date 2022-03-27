import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

const CourtInfo = ({ name, price }: { name: string; price: string }) => {
  return (
    <View style={styles.info}>
      <Text style={styles.boldText}>{name}</Text>
      <Text style={styles.text}>От {price} ₽</Text>
    </View>
  );
};

export default CourtInfo;

const styles = StyleSheet.create({
  info: {
    position: "absolute",
    bottom: 15,
    left: 15,
    justifyContent: "center",
  },
  boldText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    fontSize: 13,
    color: "white",
  },
});
