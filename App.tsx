import React, { useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigators/NavigationStack";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { DateTimeProvider } from "./src/contexts/DateTimePickerContext";
import DateTimePickerModalize from "./src/modalizes/DateTimePickerModalize";
import { ModalizesOpenFunctionsProvider } from "./src/contexts/ModalizesOpenFunctionsContext";
import ModalizesOpenFunctionsContext from "./src/contexts/ModalizesOpenFunctionsContext";

const App = () => {
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
    <>
      <NavigationContainer>
        <ModalizesOpenFunctionsProvider
          value={{
            dateTimePickerModalizeOpen: onOpen,
          }}
        >
          <NavigationStack />
        </ModalizesOpenFunctionsProvider>
      </NavigationContainer>
      <DateTimeProvider
        value={{
          setChosenDateDay: setChosenDateDay,
          setChosenDateTime: setChosenDateTime,
        }}
      >
        <DateTimePickerModalize modalizeRef={modalizeRef} onClose={onClose} />
      </DateTimeProvider>
    </>
  );
};

export default App;
