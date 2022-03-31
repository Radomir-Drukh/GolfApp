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

const ClubCardStats = ({
  stat1,
  stat2,
  stat3,
}: {
  stat1: string;
  stat2: string;
  stat3: string;
}) => {
  return (
    <View style={styles.info}>
      <View style={styles.stat}>
        <Text style={styles.h1}>{stat1}</Text>
        <Text style={styles.h2}>Крытых кортов</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.h1}>{stat2}</Text>
        <Text style={styles.h2}>Открытых кортов</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.h1}>{stat3}</Text>
        <Text style={styles.h2}>Сквош корта</Text>
      </View>
    </View>
  );
};

export default ClubCardStats;

const styles = StyleSheet.create({
  info: {
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  stat: {
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  h1: {
    fontSize: 16,
    color: "rgba(49, 113, 211, 1)",
    textAlign: "center",
    marginTop: 7,
  },
  h2: {
    fontSize: 12,
    marginBottom: 7,
    marginHorizontal: 8,
    color: "rgba(0, 0, 0, 0.6)",
    textAlign: "center",
    width: "70%",
  },
  h3: {
    fontSize: 14,
    marginTop: 15,
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
