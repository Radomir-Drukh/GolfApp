import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const OnePartOfDay = ({ partOfDay, chosenTime, setChosenTime }) => {
  return (
    <Pressable
      onPress={() => {
        setChosenTime(partOfDay);
      }}
      style={[
        styles.oneTime,
        { backgroundColor: chosenTime === partOfDay ? "#FFEF00" : "#FFFFFF" },
      ]}
    >
      <Feather
        name={
          partOfDay === "Утро"
            ? "sunrise"
            : partOfDay === "День"
            ? "sun"
            : "moon"
        }
        size={24}
        color="black"
        style={{ marginRight: 10 }}
      />
      <Text>{partOfDay}</Text>
    </Pressable>
  );
};

export default OnePartOfDay;

const styles = StyleSheet.create({
  oneTime: {
    width: "30%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginHorizontal: 5,
  },
});
