import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

const CourtCapacity = ({ maxCapacity }: { maxCapacity: string }) => {
  return (
    <View style={styles.view}>
      <Image
        source={require("../../../assets/user.png")}
        style={styles.image}
      />
      <Text style={styles.text}>2-{maxCapacity}</Text>
    </View>
  );
};

export default CourtCapacity;

const styles = StyleSheet.create({
  image: {
    height: 24,
    width: 24,
  },
  text: {
    fontSize: 13,
    color: "white",
  },
  view: {
    position: "absolute",
    top: 15,
    left: 15,
    alignItems: "center",
    flexDirection: "row",
  },
});
