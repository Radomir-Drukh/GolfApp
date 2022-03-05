import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import OneTimeChoose from "./OneTimeChoose";

export default function DateTimeChoose(chosenDay: any) {
  const [chosenTime, setChosenTime] = useState(0);
  //onPress у TouchableOpacity работает дико криво, я не смог поправить до конца
  return (
    <View style={{ paddingTop: "10%", height: 500 }}>
      <View style={styles.allTimes}>
        <TouchableOpacity
          onPress={() => {
            setChosenTime(1);
          }}
          hitSlop={{ top: 60, bottom: 60, left: 15, right: 15 }}
          style={[
            styles.oneTime,
            { backgroundColor: chosenTime === 1 ? "#FFEF00" : "#FFFFFF" },
          ]}
        >
          <OneTimeChoose picName="sunrise" timeName="Утро" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setChosenTime(2);
          }}
          hitSlop={{ top: 60, bottom: 60, left: 15, right: 15 }}
          style={[
            styles.oneTime,
            { backgroundColor: chosenTime === 2 ? "#FFEF00" : "#FFFFFF" },
          ]}
        >
          <OneTimeChoose picName="sun" timeName="День" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setChosenTime(3)}
          hitSlop={{ top: 60, bottom: 60, left: 15, right: 15 }}
          style={[
            styles.oneTime,
            { backgroundColor: chosenTime === 3 ? "#FFEF00" : "#FFFFFF" },
          ]}
        >
          <OneTimeChoose picName="moon" timeName="Вечер" />
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  allTimes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginHorizontal: 7,
  },
  oneTime: {
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
});
