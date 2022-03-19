import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const NavigationBackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.button} onPress={navigation.goBack}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </Pressable>
  );
};

export default NavigationBackButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "grey",
    width: 48,
    height: 48,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 15,
    position: "absolute",
  },
});
