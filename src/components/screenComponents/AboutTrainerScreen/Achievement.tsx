import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Achievement = ({ logo, text1, text2 }) => {
  const logoComponent = (logo) => {
    if (logo === "clockcircleo")
      return <AntDesign name={logo} size={24} color="blue" />;
    else if (logo === "medal")
      return <Entypo name="medal" size={24} color="#F7B016" />;
  };

  return (
    <View style={styles.achievement}>
      <View style={styles.prize}>{logoComponent(logo)}</View>
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </View>
  );
};

export default Achievement;

const styles = StyleSheet.create({
  prize: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  achievement: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  text1: {
    marginTop: 5,
    fontSize: 12,
  },
  text2: {
    color: "#000000",
    opacity: 0.6,
    fontSize: 12,
  },
});
