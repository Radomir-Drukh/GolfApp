import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import { useRef, useState } from "react";
import BookingModule from "./src/components/BookingModule";
import SelectButton from "./src/components/SelectButton";

export default function App() {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const [chosenDate, setChosenDate] = useState("Еще не выбрана");

  return (
    <View style={styles.container}>
      <Pressable style={styles.choosingScreenComponents} onPress={onOpen}>
        <Text style={{ fontSize: 20 }}>Выбрать дату</Text>
      </Pressable>
      <Text>Выбранная дата: {chosenDate}</Text>

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
        <BookingModule />
      </Modalize>
    </View>
  );
}

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
});
