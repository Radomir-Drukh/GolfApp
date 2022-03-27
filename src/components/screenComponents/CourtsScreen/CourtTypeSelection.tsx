import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

const CourtTypeSelection = ({
  indoorSelected,
  setOpenSelected,
}: {
  indoorSelected: boolean;
  setOpenSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Pressable
          style={[
            styles.courtType,
            { backgroundColor: indoorSelected ? "#3171D3" : "transparent" },
          ]}
          onPress={() => setOpenSelected(true)}
        >
          <Text
            style={[styles.text, { color: indoorSelected ? "white" : "black" }]}
          >
            Крытые
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.courtType,
            { backgroundColor: indoorSelected ? "transparent" : "#3171D3" },
          ]}
          onPress={() => setOpenSelected(false)}
        >
          <Text
            style={[styles.text, { color: indoorSelected ? "black" : "white" }]}
          >
            Открытые
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CourtTypeSelection;

const styles = StyleSheet.create({
  view: {
    height: 48,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: "93%",
    borderRadius: 10,
  },
  courtType: {
    flex: 1,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
  },
});
