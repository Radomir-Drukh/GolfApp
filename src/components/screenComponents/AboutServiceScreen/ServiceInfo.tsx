import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Adress from "../../baseComponents/Adress";
import InformationSelection from "../../baseComponents/InformationSelection";
import TextListInfo from "../../baseComponents/TextListInfo";
import TextListInfoItem from "../../baseComponents/TextListInfoItem";
import MoreServiceInfo from "./MoreServiceInfo";

const ServiceInfo = () => {
  const [moreSelected, setMoreSelected] = useState(true);

  const numeration1: string[] = [
    "выносливость;",
    "гибкость;",
    "скорость;",
    "силу;",
    "ловкость;",
    "координацию;",
    "внимание;",
  ];

  return (
    <View style={styles.view}>
      <Adress adress={"Новогорск, ул. Заречная, вл.8"} />
      <Text style={styles.h1}>Тренировки по ОФП</Text>
      <Text style={styles.h2}>О тренировках</Text>
      <Text style={styles.h3}>
        Общая физическая подготовка – система упражнений, направленная на
        гармоничное развитие разных групп мышц и поднятие общего тонуса
        организма. В ее основу может быть взят любой вид спорта, дополненный
        комплексом упражнений, затрагивающих все физические навыки:
      </Text>
      <TextListInfo strings={numeration1} />

      <InformationSelection
        text1={"Персональные"}
        text2={"Групповые"}
        moreSelected={moreSelected}
        setMoreSelected={setMoreSelected}
      />
      <MoreServiceInfo moreSelected={moreSelected} />
    </View>
  );
};

export default ServiceInfo;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 10,
    marginHorizontal: 15,
  },
  h2: {
    fontSize: 20,
    marginHorizontal: 15,
    marginTop: 10,
  },
  h3: {
    fontSize: 14,
    marginHorizontal: 15,
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
});
