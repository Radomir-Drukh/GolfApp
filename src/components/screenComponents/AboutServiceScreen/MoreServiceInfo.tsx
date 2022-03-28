import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import TextListInfo from "../../baseComponents/TextListInfo";
import TextListInfoItem from "../../baseComponents/TextListInfoItem";

const MoreServiceInfo = ({ moreSelected }: { moreSelected: boolean }) => {
  const numeration1: string[] = [
    "1 человек - 2 000 руб.",
    "2 человека - 2 500 руб.",
  ];

  const numeration2: string[] = [
    "Длительность занятия 30 мин - 450 руб.",
    "Длительность занятия 1 час - 800 руб.",
  ];

  if (moreSelected)
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Цена персональных занятий</Text>
        <TextListInfo strings={numeration1} />
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Цена персональных занятий</Text>
        <TextListInfo strings={numeration2} />
      </View>
    );
};

export default MoreServiceInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  h1: {
    fontSize: 28,
    marginTop: 10,
    marginHorizontal: 15,
  },
  h2: {
    fontSize: 20,
    marginHorizontal: 15,
    marginTop: 10,
  },
  h3: {
    fontSize: 14,
    marginHorizontal: 15,
    marginTop: 10,
    color: "#000000",
    opacity: 0.6,
  },
  h4: {
    fontSize: 12,
    marginTop: 10,
    marginHorizontal: 15,
    color: "#000000",
    opacity: 0.6,
  },
  dummy: {
    height: 300,
    width: "100%",
  },
});
