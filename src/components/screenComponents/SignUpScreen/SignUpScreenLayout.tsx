import React, { useContext, useRef, useState } from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import DatePicker from "./DatePicker";
import PhonePicker from "./PhonePicker";
import SignUpContext from "../../../contexts/SignUpContext";
import { Dimensions } from "react-native";
import AmountPicker from "./AmountPicker";

const windowWidth = Dimensions.get("window").width;

const SignUpScreenLayout = () => {
  const signUpContext = useContext(SignUpContext);

  return (
    <View
      style={{
        justifyContent: "center",
        width: windowWidth - 30,
        height: "100%",
        marginHorizontal: 15,
      }}
    >
      <Text style={styles.h1}>
        {signUpContext.modalizeType === "service"
          ? "Название услуги"
          : signUpContext.modalizeType === "trainer"
          ? "Запись к тренеру"
          : "Бронь корта"}
      </Text>
      <Text style={styles.h3}>
        {signUpContext.modalizeType === "service"
          ? "Для того, чтобы записаться на “название услуги” укажите необходимые данные:"
          : signUpContext.modalizeType === "trainer"
          ? "Для того, чтобы записаться к тренеру “ФИО” укажите необходимые данные:"
          : "Для того, чтобы забронировать корт укажите необхолимые данные."}
      </Text>
      <DatePicker
        text={
          signUpContext.modalizeType === "court"
            ? "Время бронирования"
            : "Время записи"
        }
        chosenTime={signUpContext.verifiedDate}
        openModalize={signUpContext.openDateModalize}
        active={true}
      />
      {signUpContext.modalizeType === "court" ? (
        <AmountPicker active={true} text="Кол - во часов" />
      ) : (
        <View></View>
      )}
      <PhonePicker
        active={true}
        userNumber={signUpContext.userNumber}
        setUserNumber={signUpContext.setUserNumber}
      />
    </View>
  );
};

export default SignUpScreenLayout;

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
