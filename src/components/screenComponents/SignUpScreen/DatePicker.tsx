import React, { useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import GrayLine from "../../baseComponents/GrayLine";
import GrayLine2 from "../../baseComponents/GrayLine2";

const DatePicker = ({
  text,
  chosenTime,
  openModalize,
  active,
}: {
  text: string;
  chosenTime: string;
  openModalize: () => void;
  active: boolean;
}) => {
  if (active)
    return (
      <View style={{ marginTop: 15 }}>
        <Text style={styles.h2}>{text}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.h3}>{chosenTime}</Text>
          <Pressable style={{ marginTop: 10 }} onPress={() => openModalize()}>
            <Image
              source={require("../../../assets/calendar.png")}
              style={{
                height: 24,
                width: 24,
              }}
            />
          </Pressable>
        </View>
        <GrayLine2 width="100%" />
      </View>
    );
  else
    return (
      <View style={{ marginTop: 15 }}>
        <Text style={styles.h2}>{text}</Text>
        <Text style={styles.h3}>{chosenTime}</Text>
        <GrayLine2 width="100%" />
      </View>
    );
};

export default DatePicker;

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
