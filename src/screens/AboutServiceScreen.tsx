import React, { Fragment, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import AboutServiceScreenLayout from "../components/screenComponents/AboutServiceScreen/AboutServiceScreenLayout";
import { DateTimeProvider } from "../contexts/DateTimePickerContext";
import DateTimePickerModalize from "../modalizes/DateTimePickerModalize";

const AboutServiceScreen = ({ navigation }) => {
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
      <AboutServiceScreenLayout openModalize={openModalize} />
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

export default AboutServiceScreen;
