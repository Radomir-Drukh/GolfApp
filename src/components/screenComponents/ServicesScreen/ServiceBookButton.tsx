import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

const ServiceBookButton = () => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <Pressable
      onPress={() => {
        navigate("О услуге");
      }}
      style={styles.bookButton}
    >
      <Text style={styles.text}>Записаться</Text>
    </Pressable>
  );
};

export default ServiceBookButton;

const styles = StyleSheet.create({
  bookButton: {
    backgroundColor: "#3171D3",
    width: 137,
    height: 45,
    position: "absolute",
    top: 200 - 45,
    right: 0,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 13,
    color: "white",
  },
});
