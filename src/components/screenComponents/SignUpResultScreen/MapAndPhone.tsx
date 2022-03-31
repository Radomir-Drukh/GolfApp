import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";

const MapAndPhone = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Pressable style={styles.button}>
          <Image
            source={require("../../../assets/map.png")}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </Pressable>
        <Text style={styles.h3}>Как добраться</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Pressable style={styles.button}>
          <Image
            source={require("../../../assets/phone_outline.png")}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </Pressable>
        <Text style={styles.h3}>Позвонить</Text>
      </View>
    </View>
  );
};

export default MapAndPhone;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 25,
    fontWeight: "bold",
    width: "50%",
  },
  h2: {
    fontSize: 20,
    marginTop: 10,
  },
  h3: {
    fontSize: 12,
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
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(49, 113, 211, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: "70%",
  },
});
