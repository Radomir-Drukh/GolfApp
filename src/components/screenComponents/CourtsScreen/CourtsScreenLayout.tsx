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
import CourtsList from "./CourtsList";
import CourtTypeSelection from "./CourtTypeSelection";

const CourtsScreenLayout = () => {
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

export default CourtsScreenLayout;
