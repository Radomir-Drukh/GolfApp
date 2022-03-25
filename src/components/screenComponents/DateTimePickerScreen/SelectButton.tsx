import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";

const SelectButton = ({ onClose }) => {
  return (
    <View style={styles.border}>
      <Pressable style={styles.container} onPress={() => onClose()}>
        <Text style={styles.text}>Выбрать</Text>
      </Pressable>
    </View>
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  container: {
    height: 52,
    marginBottom: 23,
    marginTop: 23,
    width: "95%",
    borderRadius: 10,
    backgroundColor: "#3171D3",
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    width: "100%",
    borderColor: "#F5F5F5",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
