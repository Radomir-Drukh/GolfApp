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
import CourtBookButton from "../CourtsScreen/CourtBookButton";
import CourtCapacity from "../CourtsScreen/CourtCapacity";
import CourtInfo from "../CourtsScreen/CourtInfo";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const NewsCard = ({
  date,
  text,
  picture,
}: {
  date: string;
  text: string;
  picture: string;
}) => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

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
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)"]}
          style={styles.linearGradient}
        >
          <Text style={styles.h3}>{date}</Text>
          <Text style={styles.h2}>{text}</Text>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.h4}>Читать</Text>
          </Pressable>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 250,
    borderRadius: 16,
    marginTop: 20,
    marginLeft: 15,
  },
  image: {
    flex: 1,
    borderRadius: 16,
    resizeMode: "contain",
  },
  info: {
    marginLeft: 15,
    height: "100%",
    width: "50%",
    justifyContent: "center",
    position: "absolute",
  },
  button: {
    marginTop: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 8,
    width: 100,
    height: 36,
    marginHorizontal: 15,
  },
  h1: {
    fontSize: 28,
    marginTop: 25,
    marginHorizontal: 15,
  },
  h2: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    marginHorizontal: 15,
  },
  h3: {
    marginTop: 15,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    marginHorizontal: 15,
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
    justifyContent: "space-around",
  },
});
