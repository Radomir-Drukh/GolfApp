import React from "react";
import { View, StyleSheet } from "react-native";
import OnePartOfDay from "./OnePartOfDay";

const AllPartsOfDay = ({ chosenTime, setChosenTime }) => {
  return (
    <View style={styles.allTimes}>
      <OnePartOfDay
        partOfDay={"Утро"}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
      />
      <OnePartOfDay
        partOfDay={"День"}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
      />
      <OnePartOfDay
        partOfDay={"Вечер"}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
      />
    </View>
  );
};

export default AllPartsOfDay;

const styles = StyleSheet.create({
  allTimes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
});
