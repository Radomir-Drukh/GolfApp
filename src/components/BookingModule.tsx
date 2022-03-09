import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
//import WeekSidescroll from "./WeekSidescroll";
import DateTimeChoose from "./DateTimeChoose";
import CalendarStrip from "react-native-calendar-strip";
import WeekSidescroll from "./WeekSidescroll";

export default function BookingModule({ setChosenDateDay, setChosenDateTime }) {
  return (
    <View>
      <WeekSidescroll setChosenDateDay={setChosenDateDay} chosenDay={"1"} />
      <DateTimeChoose setChosenDateTime={setChosenDateTime} chosenDay={1} />
    </View>
  );
}

/* Неудачная версия
export default function BookingModule({ setChosenDateDay, setChosenDateTime }) {
  const calendarStripEl = useRef<CalendarStrip>(null);

  const dateChanged = () => {
    if (calendarStripEl.current !== null) {
      const day = new Date(calendarStripEl.current.getSelectedDate()!);
      //Мразь возвращает выбранную дату ДО ТОГО, как сменить ее после нажатия. Гиблое дело
      console.log(day);
      console.log(day.getDay());
      console.log(day.getDay().toString());

      setChosenDateDay(day.getDay().toString());
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 20, paddingTop: "7%", paddingLeft: "3%" }}>
        Выберите время записи
      </Text>
      <CalendarStrip
        calendarAnimation={{ type: "sequence", duration: 30 }}
        daySelectionAnimation={{
          type: "background",
          duration: 200,
          highlightColor: "#FFEF00",
        }}
        selectedDate={new Date()}
        onDateSelected={dateChanged}
        style={{ height: 100 }}
        calendarHeaderStyle={{ color: "white" }}
        calendarColor={"white"}
        dateNumberStyle={{ color: "grey" }}
        dateNameStyle={{ color: "grey" }}
        highlightDateNumberStyle={{ color: "black" }}
        highlightDateNameStyle={{ color: "black" }}
        iconContainer={{ flex: 0.1 }}
        ref={calendarStripEl}
      />
      <DateTimeChoose setChosenDateTime={setChosenDateTime} chosenDay={1} />
    </View>
  );
}
*/
