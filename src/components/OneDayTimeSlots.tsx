import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import TimeSlot from "./TimeSlot";

export default function OneDayTimeSlots({
  chosenDay,
  chosenTime,
  setChosenDateTime,
}) {
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

  useEffect(() => {
    setChosenDateTime(chosenSlot);
  });

  let numberOfLines: number = Math.ceil(slotsInDaytime / 3);

  let rows: any[] = [];

  let row: any[] = [];

  //Где-то Warning "Each child in a list should have a unique 'key'. У массива массивов тоже должен быть ключ?"

  for (let i = 0; i < slotsInDaytime; i++) {
    row.push(
      //Этот key не срабатывает, почему???
      <TimeSlot
        key={i}
        setChosenSlot={setChosenSlot}
        isChosen={DATA[i] === chosenSlot}
        slotText={DATA[i]}
      />
    );
    if ((i + 1) % 3 === 0 || i + 1 === slotsInDaytime) {
      let addDummies = (i + 1) % 3;
      for (let j = addDummies; j % 3 !== 0; j++)
        row.push(<View style={styles.timeSlot}></View>);
      rows.push(row);
      row = [];
    }
  }

  return (
    <View style={styles.allRows}>
      <View style={styles.row}>{rows[0]}</View>
      <View style={styles.row}>{rows[1]}</View>
      <View style={styles.row}>{rows[2]}</View>
    </View>
  );
}

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
