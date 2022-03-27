import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TimePicker from "./TimePicker";
import CalendarStrip from "react-native-calendar-strip";
import WeekSidescroll from "./WeekSidescroll";

const DateTimePickerScreenLayout = () => {
  const today = new Date();

  return (
    <View>
      <WeekSidescroll chosenDay={today.getDate().toString()} />
      <TimePicker chosenDay={1} />
    </View>
  );
};

export default DateTimePickerScreenLayout;
