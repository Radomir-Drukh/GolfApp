import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import GrayLine2 from "../../baseComponents/GrayLine2";

const PhonePicker = ({
  active,
  userNumber,
  setUserNumber,
}: {
  active: boolean;
  userNumber;
  setUserNumber;
}) => {
  if (active) {
    const [number, setNumber] = useState("");

    let currentSelection: {
      start: number;
      end?: number | undefined;
    };

    useEffect(() => {
      let pureNumber = number.replace(/\D/g, "");

      setUserNumber(
        (pureNumber[0] === undefined ? "_" : pureNumber[0]) +
          " (" +
          (pureNumber[1] === undefined ? "_" : pureNumber[1]) +
          (pureNumber[2] === undefined ? "_" : pureNumber[2]) +
          (pureNumber[3] === undefined ? "_" : pureNumber[3]) +
          ") " +
          (pureNumber[4] === undefined ? "_" : pureNumber[4]) +
          (pureNumber[5] === undefined ? "_" : pureNumber[5]) +
          (pureNumber[6] === undefined ? "_" : pureNumber[6]) +
          " - " +
          (pureNumber[7] === undefined ? "_" : pureNumber[7]) +
          (pureNumber[8] === undefined ? "_" : pureNumber[8]) +
          " - " +
          (pureNumber[9] === undefined ? "_" : pureNumber[9]) +
          (pureNumber[10] === undefined ? "_" : pureNumber[10])
      );
    });

    const allMatches = userNumber.match(/\d/g);

    if (allMatches === null) {
      currentSelection = { start: 0, end: 0 };
    } else {
      let index: number = userNumber.lastIndexOf(allMatches.pop()!);
      currentSelection = { start: index + 1, end: index + 1 };
    }

    return (
      <View style={{ marginTop: 15 }}>
        <Text style={styles.h2}>Телефон</Text>
        <TextInput
          keyboardType={"number-pad"}
          onChangeText={setNumber}
          placeholder={active ? "Укажите ваш телефон" : ""}
          value={userNumber}
          selection={currentSelection}
          editable={active}
          onSelectionChange={() => {
            //console.log("Changed")
          }}
        ></TextInput>
        <GrayLine2 width="100%" />
      </View>
    );
  } else
    return (
      <View style={{ marginTop: 15 }}>
        <Text style={styles.h2}>Телефон</Text>
        <Text style={{ marginTop: 10 }}>{userNumber}</Text>
        <GrayLine2 width="100%" />
      </View>
    );
};

export default PhonePicker;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 10,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 16,
    marginTop: 10,
  },
  h3: {
    fontSize: 14,
    marginTop: 10,
    color: "#000000",
    opacity: 0.6,
  },
  h4: {
    fontSize: 12,
    marginTop: 10,
    marginHorizontal: 15,
    color: "#000000",
    opacity: 0.6,
  },
  view: {
    backgroundColor: "white",
  },
});
