import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WeekSidescroll from "./WeekSidescroll";
import DateTimeChoose from "./DateTimeChoose";

export default function BookingModule() {
  return (
    <View>
      <WeekSidescroll chosenDay={"1"} />
      <DateTimeChoose chosenDay={1} />
    </View>
  );
}
