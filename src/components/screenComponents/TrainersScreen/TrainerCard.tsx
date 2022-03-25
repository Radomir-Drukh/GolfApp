import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Card = {
  uri: string;
  boldText: string;
  normalText: string;
};

const TrainerCard = ({ uri, boldText, normalText }: Card) => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        navigate("О тренере");
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
      <Text style={styles.h2}>{boldText}</Text>
      <Text style={styles.h4}>{normalText}</Text>
    </Pressable>
  );
};

export default TrainerCard;

const styles = StyleSheet.create({
  image: {
    height: windowHeight / 3,
    width: "100%",
    marginTop: 10,
    borderRadius: 16,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    //alignItems: "center",
    //justifyContent: "center",
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
});
