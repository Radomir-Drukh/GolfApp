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

const TimeSlot = ({ setChosenSlot, isChosen, slotText }) => {
  return (
    <Pressable
      onPress={() => {
        setChosenSlot(slotText);
      }}
      style={[
        styles.timeSlot,
        { backgroundColor: isChosen ? "#110A54" : "#F1F1F1" },
      ]}
    >
      <Text style={{ color: isChosen ? "#FFFFFF" : "#000000" }}>
        {slotText}
      </Text>
    </Pressable>
  );
};

export default TimeSlot;

const styles = StyleSheet.create({
  timeSlot: {
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginHorizontal: 5,
  },
});
