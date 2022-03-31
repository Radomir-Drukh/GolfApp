import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { getHeaderTitle } from "@react-navigation/elements";
import { Image, Pressable, View, Text } from "react-native";
import AboutTrainerScreen from "../screens/AboutTrainerScreen";
import StartingScreen from "../screens/StartingScreen";
import TrainersScreen from "../screens/TrainersScreen";
import NavigationTab from "./NavigationTab";
import AboutCourtScreen from "../screens/AboutCourtScreen";
import AboutServiceScreen from "../screens/AboutServiceScreen";
import AboutClubScreen from "../screens/AboutClubScreen";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Все вкладки"
        component={NavigationTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="О тренере"
        component={AboutTrainerScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="О корте"
        component={AboutCourtScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="О услуге"
        component={AboutServiceScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="О клубе"
        component={AboutClubScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
