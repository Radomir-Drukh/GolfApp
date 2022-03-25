import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import AllPartsOfDay from "./AllPartsOfDay";

import DayTimeSlots from "./DayTimeSlots";

const TimePicker = ({ chosenDay }) => {
  const [chosenTime, setChosenTime] = useState("Утро");

  const arr = new Array(3).fill(0).map((e) => <View />);

  return (
    <View style={{ paddingTop: 30, height: 500 }}>
      <AllPartsOfDay chosenTime={chosenTime} setChosenTime={setChosenTime} />
      <DayTimeSlots chosenDay={chosenDay} chosenTime={chosenTime} />
    </View>
  );
};

export default TimePicker;
