import React from "react";
import { View, StyleSheet } from "react-native";
import PartOfDay from "./PartOfDay";

const AllPartsOfDay = ({ chosenTime, setChosenTime }) => {
  return (
    <View style={styles.allTimes}>
      <PartOfDay
        partOfDay={"Утро"}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
      />
      <PartOfDay
        partOfDay={"День"}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
      />
      <PartOfDay
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
