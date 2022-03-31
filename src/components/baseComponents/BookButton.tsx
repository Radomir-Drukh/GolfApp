import React, { useContext, useRef, useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { DateTimeProvider } from "../../contexts/DateTimePickerContext";
import DateTimePickerModalize from "../../modalizes/DateTimePickerModalize";
import ModalizesOpenFunctionsContext from "../../contexts/ModalizesOpenFunctionsContext";

const BookButton = ({
  text,
  openModalize,
}: {
  text: string;
  openModalize: () => void;
}) => {
  //const modalizesOpenFunctions = useContext(ModalizesOpenFunctionsContext);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={openModalize}>
        <AntDesign name="plus" size={20} color="white" />
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default BookButton;

const styles = StyleSheet.create({
  button: {
    height: 52,
    marginBottom: 23,
    marginTop: 23,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#3171D3",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: 80,
    bottom: 0,
    position: "absolute",
    marginHorizontal: "20%",
  },
  text: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
});
