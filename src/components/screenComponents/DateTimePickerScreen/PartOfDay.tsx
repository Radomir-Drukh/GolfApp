import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const PartOfDay = ({ partOfDay, chosenTime, setChosenTime }) => {
  return (
    <Pressable
      onPress={() => {
        setChosenTime(partOfDay);
      }}
      style={[
        styles.oneTime,
        { backgroundColor: chosenTime === partOfDay ? "#3171D3" : "#FFFFFF" },
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
        color={chosenTime === partOfDay ? "white" : "#8F8F8F"}
        style={{ marginRight: 10 }}
      />
      <Text style={{ color: chosenTime === partOfDay ? "white" : "#8F8F8F" }}>
        {partOfDay}
      </Text>
    </Pressable>
  );
};

export default PartOfDay;

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
