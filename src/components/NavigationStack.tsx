import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { getHeaderTitle } from "@react-navigation/elements";
import { Image, Pressable, View, Text } from "react-native";
import AboutTrainerScreen from "../screens/AboutTrainerScreen";
import StartingScreen from "../screens/StartingScreen";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Стартовая страница"
        options={{
          headerShown: false,
        }}
        component={StartingScreen}
      />
      <Stack.Screen
        name="О тренере"
        component={AboutTrainerScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
