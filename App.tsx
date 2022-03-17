import React from "react";
import StartingScreen from "./src/screens/StartingScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AboutTrainerScreen from "./src/screens/AboutTrainerScreen";
import { getHeaderTitle } from "@react-navigation/elements";
import { Image, Pressable, View, Text } from "react-native";
import TrainerScreenTitle from "./src/components/TrainerScreenTitle";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackAccessibilityLabel: "true",
        }}
      >
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
            header: ({ navigation, route, options, back }) =>
              TrainerScreenTitle({ navigation, route, options, back }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
