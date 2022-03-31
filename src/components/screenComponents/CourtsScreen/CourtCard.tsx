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
import CourtBookButton from "./CourtBookButton";
import CourtCapacity from "./CourtCapacity";
import CourtInfo from "./CourtInfo";
import { LinearGradient } from "expo-linear-gradient";

const CourtCard = ({
  maxCapacity,
  name,
  price,
  picture,
}: {
  maxCapacity: string;
  name: string;
  price: string;
  picture: string;
}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: picture,
        }}
        imageStyle={{ borderRadius: 16 }}
      >
        <LinearGradient
          locations={[0, 1.0]}
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.5)"]}
          style={styles.linearGradient}
        ></LinearGradient>
      </ImageBackground>

      <CourtBookButton />
      <CourtInfo name={name} price={price} />
      <CourtCapacity maxCapacity={maxCapacity} />
    </View>
  );
};

export default CourtCard;

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: "93%",
    borderRadius: 16,
    marginTop: 20,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  h1: {
    fontSize: 28,
    marginTop: 25,
    marginHorizontal: 15,
  },
  h2: {
    fontSize: 16,
    marginTop: 8,
  },
  h3: {
    fontSize: 14,
    color: "#000000",
    opacity: 0.6,
  },
  h4: {
    fontSize: 12,
    color: "#000000",
    opacity: 0.6,
    marginTop: 3,
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
