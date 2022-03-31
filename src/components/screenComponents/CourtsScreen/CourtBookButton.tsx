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

const CourtBookButton = () => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <Pressable
      onPress={() => {
        navigate("О корте");
      }}
      style={styles.bookButton}
    >
      <Text style={styles.text}>Забронировать</Text>
    </Pressable>
  );
};

export default CourtBookButton;

const styles = StyleSheet.create({
  bookButton: {
    backgroundColor: "#3171D3",
    width: 137,
    height: 38,
    position: "absolute",
    bottom: 0,
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
