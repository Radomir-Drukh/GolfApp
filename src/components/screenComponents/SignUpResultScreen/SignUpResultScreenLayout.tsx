import React, { useContext, useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import MapAndPhone from "./MapAndPhone";
import SignUpContext from "../../../contexts/SignUpContext";

const SignUpResultScreenLayout = () => {
  const signUpContext = useContext(SignUpContext);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={styles.icon}>
        <Image
          source={require("../../../assets/like.png")}
          style={{
            height: 64,
            width: 64,
          }}
        />
      </View>
      <Text style={styles.h1}>
        {signUpContext.modalizeType === "service"
          ? "Запись произведена успешно"
          : signUpContext.modalizeType === "trainer"
          ? "Запись произведена успешно"
          : "Корт успешно забронирован"}
      </Text>
      <MapAndPhone />
    </View>
  );
};

export default SignUpResultScreenLayout;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 25,
    fontWeight: "bold",
    width: "70%",
    textAlign: "center",
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
  icon: {
    backgroundColor: "rgba(245, 245, 245, 1)",
    justifyContent: "center",
    alignItems: "center",
    width: 224,
    height: 224,
    borderRadius: 112,
  },
});
