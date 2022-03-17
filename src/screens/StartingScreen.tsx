import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import { useRef, useState } from "react";
import "react-native-gesture-handler";
import DateTimePickerScreen from "../screens/DateTimePickerScreen";
import SelectButton from "../components/SelectButton";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import DateTimePickerModule from "../components/DateTimePickerModule";
import { DateTimeProvider } from "../contexts/DateTimePickerContext";

const StartingScreen = ({ navigation }) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const [chosenDateDay, setChosenDateDay] = useState("");
  const [chosenDateTime, setChosenDateTime] = useState("");

  let verifiedDate =
    chosenDateDay === "" || chosenDateTime === ""
      ? "Еще не выбран"
      : chosenDateDay + " числа в " + chosenDateTime;

  return (
    <View style={styles.container}>
      <Pressable style={styles.choosingScreenComponents} onPress={onOpen}>
        <Text style={styles.text}>Выбрать дату</Text>
      </Pressable>
      <Text>Вы забронировали слот: {verifiedDate}</Text>
      <Pressable
        style={styles.choosingScreenComponents}
        onPress={() => {
          navigation.navigate("О тренере");
        }}
      >
        <Text style={styles.text}>О тренере</Text>
      </Pressable>
      <DateTimeProvider
        value={{
          setChosenDateDay: setChosenDateDay,
          setChosenDateTime: setChosenDateTime,
        }}
      >
        <DateTimePickerModule modalizeRef={modalizeRef} onClose={onClose} />
      </DateTimeProvider>
    </View>
  );
};

export default StartingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  choosingScreenComponents: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
