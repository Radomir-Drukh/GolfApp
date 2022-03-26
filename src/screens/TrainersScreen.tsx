import React, { Fragment, useState } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Categories from "../components/screenComponents/TrainersScreen/Categories";
import DoubleList from "../components/screenComponents/TrainersScreen/DoubleList";

const TrainersScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  return (
    <View style={styles.screenView}>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ScrollView>
        <DoubleList selectedCategory={selectedCategory} />
      </ScrollView>
    </View>
  );
};

export default TrainersScreen;

const styles = StyleSheet.create({
  screenView: {
    backgroundColor: "white",
  },
});
