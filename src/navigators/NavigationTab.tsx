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

const Tab = createBottomTabNavigator();
const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Корты"
        component={EmptyView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="focus-field"
              size={24}
              color={color}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="Услуги"
        component={EmptyView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-tennis" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="Клуб"
        component={EmptyView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-tennisball-outline" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="Тренера"
        component={TrainersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-man-sharp" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="Заказы"
        component={EmptyView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
