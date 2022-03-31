import React, { Fragment, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import AboutServiceScreenLayout from "../components/screenComponents/AboutServiceScreen/AboutServiceScreenLayout";
import { DateTimeProvider } from "../contexts/DateTimePickerContext";
import DateTimePickerModalize from "../modalizes/DateTimePickerModalize";
import ServiceSignUpModalize from "../modalizes/ServiceSignUpModalize";
import ServiceSignUpResultModalize from "../modalizes/ServiceSignUpResultModalize";
import { SignUpProvider } from "../contexts/SignUpContext";
import ServiceSignUpInfoModalize from "../modalizes/ServiceSignUpInfoModalize";
import SignUpModalize from "../modalizes/ServiceSignUpModalize";
import SignUpResultModalize from "../modalizes/ServiceSignUpResultModalize";
import SignUpInfoModalize from "../modalizes/ServiceSignUpInfoModalize";

const AboutServiceScreen = ({ navigation }) => {
  const serviceModalizeRef = useRef<Modalize>(null);

  const openServiceModalize = () => {
    serviceModalizeRef.current?.open();
  };

  const closeServiceModalize = () => {
    serviceModalizeRef.current?.close();
  };

  const dateModalizeRef = useRef<Modalize>(null);

  const openDateModalize = () => {
    dateModalizeRef.current?.open();
  };

  const closeDateModalize = () => {
    dateModalizeRef.current?.close();
  };

  const resultModalizeRef = useRef<Modalize>(null);

  const openResultModalize = () => {
    resultModalizeRef.current?.open();
  };

  const closeResultModalize = () => {
    resultModalizeRef.current?.close();
  };

  const infoModalizeRef = useRef<Modalize>(null);

  const openInfoModalize = () => {
    infoModalizeRef.current?.open();
  };

  const closeInfoModalize = () => {
    infoModalizeRef.current?.close();
  };

  const [chosenDateDay, setChosenDateDay] = useState("");
  const [chosenDateTime, setChosenDateTime] = useState("");

  const today = new Date();

  const [amount, setAmount] = useState(1);

  let verifiedDate =
    chosenDateDay === "" || chosenDateTime === ""
      ? "Выберите время визита"
      : chosenDateDay +
        "." +
        today.getMonth() +
        "." +
        today.getFullYear() +
        " " +
        chosenDateTime;

  const [userNumber, setUserNumber] = useState("");

  //one context for all modilizes

  return (
    <>
      <AboutServiceScreenLayout openModalize={openServiceModalize} />
      <SignUpProvider
        value={{
          price: "2000",
          amount: amount,
          setAmount: setAmount,
          verifiedDate: verifiedDate,
          openResultModalize: openResultModalize,
          openDateModalize: openDateModalize,
          openInfoModalize: openInfoModalize,
          userNumber: userNumber,
          setUserNumber: setUserNumber,
          modalizeType: "service",
        }}
      >
        <SignUpModalize
          modalizeRef={serviceModalizeRef}
          onClose={closeServiceModalize}
        />
        <SignUpResultModalize
          modalizeRef={resultModalizeRef}
          onClose={closeResultModalize}
        />
        <SignUpInfoModalize
          modalizeRef={infoModalizeRef}
          onClose={closeInfoModalize}
        />
      </SignUpProvider>
      <DateTimeProvider
        value={{
          setChosenDateDay: setChosenDateDay,
          setChosenDateTime: setChosenDateTime,
        }}
      >
        <DateTimePickerModalize
          modalizeRef={dateModalizeRef}
          onClose={closeDateModalize}
        />
      </DateTimeProvider>
    </>
  );
};

export default AboutServiceScreen;
