import React, { Fragment, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import AboutTrainerScreenLayout from "../components/screenComponents/AboutTrainerScreen/AboutTrainerScreenLayout";
import { DateTimeProvider } from "../contexts/DateTimePickerContext";
import DateTimePickerModalize from "../modalizes/DateTimePickerModalize";

const AboutTrainerScreen = ({ navigation }) => {
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
      <AboutTrainerScreenLayout openModalize={openModalize} />
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

export default AboutTrainerScreen;
