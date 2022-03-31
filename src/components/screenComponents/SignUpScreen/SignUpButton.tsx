import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";

const SignUpButton = ({
  onBook,
  price,
  text,
  amount,
}: {
  onBook: () => void;
  price: string;
  text: string;
  amount: number;
}) => {
  return (
    <View style={styles.border}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.h3}>Итого:</Text>
        <Text style={styles.h2}>{(+price * amount).toString() + " ₽"}</Text>
      </View>
      <Pressable style={styles.container} onPress={onBook}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default SignUpButton;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 25,
    fontWeight: "bold",
    marginHorizontal: "2.5%",
  },
  h2: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: "2.5%",
  },
  h3: {
    fontSize: 14,
    marginTop: 10,
    color: "#000000",
    marginHorizontal: "2.5%",
    opacity: 0.6,
  },
  h4: {
    fontSize: 12,
    marginTop: 10,
    marginHorizontal: 15,
    color: "#000000",
    opacity: 0.6,
  },
  view: {
    backgroundColor: "white",
  },
  container: {
    height: 52,
    marginBottom: 23,
    marginTop: 23,
    width: "95%",
    marginHorizontal: "2.5%",
    borderRadius: 10,
    backgroundColor: "#3171D3",
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    justifyContent: "center",
    borderTopWidth: 2,
    width: "100%",
    borderColor: "#F5F5F5",
    bottom: 0,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
