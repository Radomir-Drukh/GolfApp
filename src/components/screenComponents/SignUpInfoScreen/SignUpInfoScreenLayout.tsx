import React, { useContext, useRef, useState } from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import DatePicker from "../SignUpScreen/DatePicker";
import PhonePicker from "../SignUpScreen/PhonePicker";
import SignUpContext from "../../../contexts/SignUpContext";
import { Dimensions } from "react-native";
import AmountPicker from "../SignUpScreen/AmountPicker";

const windowWidth = Dimensions.get("window").width;

const SignUpInfoScreenLayout = () => {
  const signUpContext = useContext(SignUpContext);

  return (
    <>
      <View style={{ width: windowWidth * 0.93 }}>
        <Text style={styles.h1}>
          {signUpContext.modalizeType === "service"
            ? "Название услуги"
            : signUpContext.modalizeType === "trainer"
            ? "Запись к тренеру"
            : "Бронь корта"}
        </Text>
        <Text style={styles.h3}>
          {signUpContext.modalizeType === "service"
            ? "Информация о записи:"
            : signUpContext.modalizeType === "trainer"
            ? "Информация о записи:"
            : "Информация о брони"}
        </Text>
        <DatePicker
          text={
            signUpContext.modalizeType === "service"
              ? "Время записи:"
              : signUpContext.modalizeType === "trainer"
              ? "Время записи:"
              : "Время бронирования"
          }
          chosenTime={signUpContext.verifiedDate}
          openModalize={signUpContext.openDateModalize}
          active={false}
        />
        {signUpContext.modalizeType === "court" ? (
          <AmountPicker active={false} text="Кол - во часов" />
        ) : (
          <View></View>
        )}
        <PhonePicker
          active={false}
          userNumber={signUpContext.userNumber}
          setUserNumber={signUpContext.setUserNumber}
        />
      </View>
    </>
  );
};

export default SignUpInfoScreenLayout;

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
