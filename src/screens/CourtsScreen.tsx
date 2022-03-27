import React, { Fragment, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CourtsList from "../components/screenComponents/CourtsScreen/CourtsList";
import CourtTypeSelection from "../components/screenComponents/CourtsScreen/CourtTypeSelection";

const CourtsScreen = () => {
  const [indoorSelected, setOpenSelected] = useState(true);
  return (
    <>
      <CourtTypeSelection
        indoorSelected={indoorSelected}
        setOpenSelected={setOpenSelected}
      />
      <View
        style={{ width: "100%", height: 10, backgroundColor: "white" }}
      ></View>
      <CourtsList indoorSelected={indoorSelected} />
    </>
  );
};

export default CourtsScreen;
