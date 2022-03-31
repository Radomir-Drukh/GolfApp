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
import ServiceBookButton from "./ServiceBookButton";

const ServiceCard = ({
  name,
  price,
  picture,
}: {
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
          colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.3)"]}
          style={styles.linearGradient}
        ></LinearGradient>
      </ImageBackground>
      <Text style={styles.price}>От {price} руб/ч</Text>
      <Text style={styles.name}>{name}</Text>

      <ServiceBookButton />
    </View>
  );
};

/*
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
    </View>

      
*/
export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: "93%",
    borderRadius: 16,
    marginTop: 20,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 16,
  },
  price: {
    fontSize: 20,
    marginTop: 10,
    color: "#3171D3",
  },
  name: {
    fontSize: 16,
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
    marginBottom: 20,
    position: "absolute",
  },
});
