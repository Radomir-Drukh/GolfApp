import React from "react";
import { Modalize } from "react-native-modalize";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import DateTimePickerScreen from "../screens/DateTimePickerScreen";
import SelectButton from "./SelectButton";

const DateTimePickerModule = ({ modalizeRef, onClose }) => {
  return (
    <Modalize
      ref={modalizeRef}
      modalHeight={544}
      modalStyle={styles.container}
      disableScrollIfPossible={false}
      velocity={10}
      withHandle={true}
      threshold={10}
      FooterComponent={<SelectButton onClose={onClose} />}
    >
      <DateTimePickerScreen />
    </Modalize>
  );
};

export default DateTimePickerModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
