import React from "react";
import { Image, Pressable, View, Text } from "react-native";
import NavigationStack from "./NavigationStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import EmptyView from "../../src/components/baseComponents/EmptyView";
import TrainersScreen from "../../src/screens/TrainersScreen";
import CourtsScreen from "../screens/CourtsScreen";
import ServicesScreen from "../screens/ServicesScreen";
import MainScreen from "../screens/MainScreen";

const Tab = createBottomTabNavigator();
const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Корты"
        component={CourtsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/field.png")}
              style={{
                tintColor: color,
                height: size,
                width: size,
              }}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="Услуги"
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/tennis.png")}
              style={{
                tintColor: color,
                height: size,
                width: size,
              }}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="Клуб"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/balls.png")}
              style={{
                tintColor: color,
                height: size,
                width: size,
              }}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="Тренера"
        component={TrainersScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/visor.png")}
              style={{
                tintColor: color,
                height: size,
                width: size,
              }}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="Заказы"
        component={EmptyView}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/orders.png")}
              style={{
                tintColor: color,
                height: 20,
                width: 20,
              }}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
