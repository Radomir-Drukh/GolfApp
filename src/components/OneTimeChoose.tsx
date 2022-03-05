import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function OneTimeChoose({ picName, timeName }) {
  //Не получилось указать явные типы, не понимаю почему. Прошлось отрубить noImplicitAny

  return (
    <TouchableOpacity style={styles.oneTime}>
      <Feather
        name={picName}
        size={24}
        color="black"
        style={{ marginRight: 10 }}
      />
      <Text>{timeName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  oneTime: {
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
