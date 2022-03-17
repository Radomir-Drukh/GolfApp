import { Feather } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { RotateInDownLeft } from "react-native-reanimated";
import DateTimeContext from "../contexts/DateTimePickerContext";
import TimeSlot from "./TimeSlot";

const OneDayTimeSlots = ({ chosenDay, chosenTime }) => {
  //здесь получаем данные о доступных слотах, но я просто создам массив

  let DATA: string[] = [];

  let startingPoint: number =
    chosenTime === "Утро" ? 9 : chosenTime === "День" ? 13 : 17;

  let date = new Date();
  date.setSeconds(0);

  let slotsInDaytime = 8;

  for (let i = 0; i < slotsInDaytime; i++) {
    date.setHours(startingPoint + Math.floor(i / 2));
    date.setMinutes(30 * (i % 2));
    DATA.push(
      date.getHours().toString() +
        ":" +
        (date.getMinutes() < 10 ? "0" : "") +
        date.getMinutes().toString()
    );
  }

  const [chosenSlot, setChosenSlot] = useState("");

  const dateTimeSetters = useContext(DateTimeContext);

  useEffect(() => {
    dateTimeSetters.setChosenDateTime(chosenSlot);
  });

  let numberOfLines: number = Math.ceil(slotsInDaytime / 3);

  let rows: any[] = [];

  let row: any[] = [];

  for (let i = 0; i < slotsInDaytime; i++) {
    row.push(
      <TimeSlot
        key={chosenDay.toString() + i.toString()}
        setChosenSlot={setChosenSlot}
        isChosen={DATA[i] === chosenSlot}
        slotText={DATA[i]}
      />
    );
    if ((i + 1) % 3 === 0 || i + 1 === slotsInDaytime) {
      let addDummies = (i + 1) % 3;
      for (let j = addDummies; j % 3 !== 0; j++)
        row.push(
          <View
            key={chosenDay.toString() + " dummy " + j.toString()}
            style={styles.timeSlot}
          ></View>
        );
      rows.push(row);
      row = [];
    }
  }

  return (
    <View style={styles.allRows}>
      {rows.map((item) => {
        return (
          <View style={styles.row} key={item.map((e) => e.key).join(" + ")}>
            {item}
          </View>
        );
      })}
    </View>
  );
};

export default OneDayTimeSlots;

const styles = StyleSheet.create({
  allRows: {
    paddingTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: "20%",
    paddingTop: 10,
    justifyContent: "center",
  },
  timeSlot: {
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginHorizontal: 5,
  },
});
