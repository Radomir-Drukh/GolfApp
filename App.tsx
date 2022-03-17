import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, Pressable, View, Text } from "react-native";
import NavigationStack from "./src/components/NavigationStack";

const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default App;
