import React from "react";
import { View, StyleSheet } from "react-native";
import OneAchievement from "./OneAchievement";

const TrainerAchievements = () => {
  return (
    <View style={styles.achievements}>
      <OneAchievement
        logo={"clockcircleo"}
        text1={"С 2009 г"}
        text2={"тренерский опыт"}
      />
      <OneAchievement
        logo={"medal"}
        text1={"Мастер спорта"}
        text2={"по теннису"}
      />
    </View>
  );
};

export default TrainerAchievements;

const styles = StyleSheet.create({
  achievements: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#F5F5F5",
    marginLeft: 15,
    marginRight: 15,
  },
});
