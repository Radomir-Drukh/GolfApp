import React, { Fragment, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ServicesList from "./ServicesList";
import ServiceCategories from "./ServiceCategories";

const ServicesScreenLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  return (
    <View style={{ backgroundColor: "white" }}>
      <ServiceCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ScrollView>
        <ServicesList selectedCategory={selectedCategory} />
      </ScrollView>
    </View>
  );
};

export default ServicesScreenLayout;
