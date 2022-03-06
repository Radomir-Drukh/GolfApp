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

export default function SelectButton({ onClose }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 2,
        width: "100%",
        borderColor: "#F5F5F5",
      }}
    >
      <TouchableOpacity style={styles.container} onPress={() => onClose()}>
        <Text style={{ fontSize: 16 }}>Выбрать</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    marginBottom: 23,
    marginTop: 23,
    width: "95%",
    borderRadius: 10,
    backgroundColor: "#FCE300",
    alignItems: "center",
    justifyContent: "center",
  },
});
