import React, { Fragment, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import AboutCourtScreenLayout from "../components/screenComponents/AboutCourtScreen/AboutCourtScreenLayout";
import { DateTimeProvider } from "../contexts/DateTimePickerContext";
import DateTimePickerModalize from "../modalizes/DateTimePickerModalize";

const AboutCourtScreen = ({ navigation }) => {
  const modalizeRef = useRef<Modalize>(null);

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  const [chosenDateDay, setChosenDateDay] = useState("");
  const [chosenDateTime, setChosenDateTime] = useState("");

  let verifiedDate =
    chosenDateDay === "" || chosenDateTime === ""
      ? "Еще не выбран"
      : chosenDateDay + " числа в " + chosenDateTime;

  //one context for all modilizes

  return (
    <>
      <AboutCourtScreenLayout openModalize={openModalize} />
      <DateTimeProvider
        value={{
          setChosenDateDay: setChosenDateDay,
          setChosenDateTime: setChosenDateTime,
        }}
      >
        <DateTimePickerModalize
          modalizeRef={modalizeRef}
          onClose={closeModalize}
        />
      </DateTimeProvider>
    </>
  );
};

export default AboutCourtScreen;
