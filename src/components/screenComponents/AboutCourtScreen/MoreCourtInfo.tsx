import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import TextListInfoItem from "../../baseComponents/TextListInfoItem";
import TextListInfo from "../../baseComponents/TextListInfo";

const MoreCourtInfo = ({ moreSelected }: { moreSelected: boolean }) => {
  const numeration1: string[] = [
    "Пять кортов закрытого типа со специальным покрытием хард US Open с десятью слоями смягчения.",
    "Все залы оборудованы современной системой кондиционирования.",
    "Удобно оборудованные раздевалки, отдельно для детей и отдельно для взрослых.",
    "Есть бесплатный Wi-Fi.",
  ];

  const numeration2: string[] = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4"];

  if (moreSelected)
    return (
      <View style={styles.container}>
        <TextListInfo strings={numeration1} />
        <Text style={styles.h3}>
          Для тех, кто посещает тренировки вместе с детьми, есть специально
          оборудованная детская комната – в ней вы можете оставить своего малыша
          и не беспокоиться о его безопасности. Также для всех наших клиентов
          оборудована бесплатная охраняемая парковка, где вы можете оставить
          свое транспортное средство под присмотром нашей охраны.
        </Text>
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <TextListInfo strings={numeration2} />
        <Text style={styles.h3}>Очень большой и информативный текст</Text>
      </View>
    );
};

export default MoreCourtInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
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
  dummy: {
    height: 300,
    width: "100%",
  },
});
