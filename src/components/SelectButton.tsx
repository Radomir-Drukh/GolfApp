import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function SelectButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: 16 }}>Выбрать</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    marginBottom: 23,
    width: "95%",
    borderRadius: 10,
    backgroundColor: "#FCE300",
    alignItems: "center",
    justifyContent: "center",
  },
});
