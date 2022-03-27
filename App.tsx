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
  return (
    <>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </>
  );
};

export default App;
