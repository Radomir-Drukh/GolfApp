import React, { Fragment } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CourtCard from "./CourtCard";

const CourtsList = ({ indoorSelected }: { indoorSelected: boolean }) => {
  const indoorCourtPic =
    "https://s3-alpha-sig.figma.com/img/d64d/ffeb/1ae05b852de54fc356a257a33bdcda5f?Expires=1649030400&Signature=aUGQGR5IuV8FtPlsurFv3cyY-2nvBJ9p3rId0yAHMa1GRSitsSHkNHclYp9eMOrmxibIqvgURfv70lx6NlidXAeqYagtUnv3TYjI1Src03Gbkk5Pr8Li7ZnL15nHrEsjP1PtxMhenMI91MVBrepj-oDEOmvzwjLK4aDX5D0jM4IdXxRZg1OgvrRjScFOBd4276WubNZso6hv7yq2EM4X38ftV~Jq90rdE7d8nEWXCyPkRP5XBqCJLG~N2nKl3Je8ngrsM1ypu5di-485H7k0hBr7JVzDvwQJQEEfyBddID93ASxi3U6UNnkpv8mK08iMcHOD-jnwUyD4z-vVlFDlRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  const openCourtPic =
    "http://www.erfolgplast.ru/wp-content/uploads/2017/01/tennisnyj-kort-svoimi-rukami.jpg";

  let DATA: JSX.Element[] = [];

  for (let i = 0; i < 3; i++)
    if (indoorSelected)
      DATA.push(
        <CourtCard
          maxCapacity="6"
          price="1500"
          name="Крытый корт"
          picture={indoorCourtPic}
          key={"Крытый корт" + i.toString()}
        />
      );
    else
      DATA.push(
        <CourtCard
          maxCapacity="8"
          price="2500"
          name="Открытый корт"
          picture={openCourtPic}
          key={"Крытый корт" + i.toString()}
        />
      );

  DATA.push(<View key={"dummy1"} style={{ height: 70 }}></View>);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {DATA}
    </ScrollView>
  );
};

export default CourtsList;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 25,
    marginHorizontal: 15,
  },
  h2: {
    fontSize: 16,
    marginTop: 8,
  },
  h3: {
    fontSize: 14,
    color: "#000000",
    opacity: 0.6,
  },
  h4: {
    fontSize: 12,
    color: "#000000",
    opacity: 0.6,
    marginTop: 3,
  },
  scrollView: { backgroundColor: "white", flex: 1 },
});
