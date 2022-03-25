import React, { Fragment } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DoubleList from "../components/screenComponents/TrainersScreen/DoubleList";

const TrainersScreen = () => {
  return (
    <ScrollView>
      <DoubleList />
    </ScrollView>
  );
};

export default TrainersScreen;

const styles = StyleSheet.create({});
