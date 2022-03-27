import React, { useRef, useState } from "react";
import DateTimePickerScreenLayout from "../components/screenComponents/DateTimePickerScreen/DateTimePickerScreenLayout";

const DateTimePickerScreen = () => {
  const today = new Date();

  return (
    <>
      <DateTimePickerScreenLayout />
    </>
  );
};

export default DateTimePickerScreen;
