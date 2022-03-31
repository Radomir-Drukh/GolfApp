import React, { useContext, useRef, useState } from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import DatePicker from "../components/screenComponents/SignUpScreen/DatePicker";
import PhonePicker from "../components/screenComponents/SignUpScreen/PhonePicker";
import { DateTimeProvider } from "../contexts/DateTimePickerContext";
import SignUpContext from "../contexts/SignUpContext";
import DateTimePickerModalize from "../modalizes/DateTimePickerModalize";
import { Dimensions } from "react-native";
import AmountPicker from "../components/screenComponents/SignUpScreen/AmountPicker";
import SignUpScreenLayout from "../components/screenComponents/SignUpScreen/SignUpScreenLayout";

const windowWidth = Dimensions.get("window").width;

const SignUpScreen = () => {
  const signUpContext = useContext(SignUpContext);

  return (
    <>
      <SignUpScreenLayout />
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 25,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    marginTop: 10,
  },
  h3: {
    fontSize: 14,
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
  view: {
    backgroundColor: "white",
  },
  container: {
    height: 52,
    marginBottom: 23,
    marginTop: 23,
    width: "95%",
    borderRadius: 10,
    backgroundColor: "#3171D3",
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    width: "100%",
    borderColor: "#F5F5F5",
    bottom: 0,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
