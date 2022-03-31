import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ClubCardStats from "./ClubCardStats";

const ClubCard = ({ title, address }: { title: string; address: string }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.h1}>{title}</Text>
      <Text style={styles.h3}>{address}</Text>
      <ClubCardStats stat1="5" stat2="5" stat3="2" />
    </View>
  );
};

export default ClubCard;

const styles = StyleSheet.create({
  card: {
    height: "35%",
    width: "85%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    shadowRadius: 10,
    shadowColor: "black",
    elevation: 10,
    marginHorizontal: "7.5%",
  },
  info: {
    marginHorizontal: 15,
    justifyContent: "center",
    flexDirection: "row",
  },
  h1: {
    fontSize: 20,
    marginTop: 5,
    marginHorizontal: 5,
    fontWeight: "bold",
    textAlign: "center",
    width: "60%",
  },
  h2: {
    fontSize: 14,
    marginHorizontal: 5,
    color: "rgba(0, 255, 255, 0.6)",
  },
  h3: {
    fontSize: 14,
    marginHorizontal: 10,
    color: "rgba(0, 0, 0, 0.6)",
    textAlign: "center",
  },
  h4: {
    fontSize: 16,
    color: "rgba(49, 113, 211, 1)",
  },
  scrollView: {
    backgroundColor: "white",
    flex: 1,
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
    marginBottom: 20,
    position: "absolute",
  },
});
