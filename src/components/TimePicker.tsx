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

import OneDayTimeSlots from "./OneDayTimeSlots";

const TimePicker = ({ chosenDay }) => {
  const [chosenTime, setChosenTime] = useState("Утро");

  const arr = new Array(3).fill(0).map((e) => <View />);

  return (
    <View style={{ paddingTop: 30, height: 500 }}>
      <AllPartsOfDay chosenTime={chosenTime} setChosenTime={setChosenTime} />
      <OneDayTimeSlots chosenDay={chosenDay} chosenTime={chosenTime} />
    </View>
  );
};

export default TimePicker;
