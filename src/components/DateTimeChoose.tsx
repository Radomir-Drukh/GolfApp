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

import OneDayTimeSlots from "./OneDayTimeSlots";

export default function DateTimeChoose({ chosenDay, setChosenDateTime }) {
  const [chosenTime, setChosenTime] = useState("Утро");

  return (
    <View style={{ paddingTop: 30, height: 500 }}>
      <View style={styles.allTimes}>
        <TouchableOpacity
          onPress={() => {
            setChosenTime("Утро");
          }}
          style={[
            styles.oneTime,
            { backgroundColor: chosenTime === "Утро" ? "#FFEF00" : "#FFFFFF" },
          ]}
        >
          <Feather
            name={"sunrise"}
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Text>Утро</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setChosenTime("День");
          }}
          style={[
            styles.oneTime,
            { backgroundColor: chosenTime === "День" ? "#FFEF00" : "#FFFFFF" },
          ]}
        >
          <Feather
            name={"sun"}
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Text>День</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setChosenTime("Вечер");
          }}
          style={[
            styles.oneTime,
            { backgroundColor: chosenTime === "Вечер" ? "#FFEF00" : "#FFFFFF" },
          ]}
        >
          <Feather
            name={"moon"}
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Text>Вечер</Text>
        </TouchableOpacity>
      </View>
      <OneDayTimeSlots
        setChosenDateTime={setChosenDateTime}
        chosenDay={chosenDay}
        chosenTime={chosenTime}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  allTimes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
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
