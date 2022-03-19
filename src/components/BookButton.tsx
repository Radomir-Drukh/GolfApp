import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BookButton = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Pressed on BookingButton!");
        }}
      >
        <AntDesign name="plus" size={20} color="white" />
        <Text style={styles.text}>Записаться</Text>
      </Pressable>
    </View>
  );
};

export default BookButton;

const styles = StyleSheet.create({
  button: {
    height: 52,
    marginBottom: 23,
    marginTop: 23,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#3171D3",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: 80,
    bottom: 0,
    position: "absolute",
    marginHorizontal: "20%",
  },
  text: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
});
