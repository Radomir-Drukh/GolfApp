import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import TextListInfoItem from "../../baseComponents/TextListInfoItem";

const MoreInfo = ({ moreSelected }: { moreSelected: boolean }) => {
  if (moreSelected)
    return (
      <View style={styles.container}>
        <TextListInfoItem
          text={
            "Пять кортов закрытого типа со специальным покрытием хард US Open с десятью слоями смягчения."
          }
        />
        <TextListInfoItem
          text={"Все залы оборудованы современной системой кондиционирования."}
        />
        <TextListInfoItem text={"Есть бесплатный Wi-Fi."} />
        <TextListInfoItem
          text={
            "Удобно оборудованные раздевалки, отдельно для детей и отдельно для взрослых."
          }
        />
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
        <TextListInfoItem text={"Пункт 1"} />
        <TextListInfoItem text={"Пункт 2"} />
        <TextListInfoItem text={"Пункт 3"} />
        <TextListInfoItem text={"Пункт 4"} />
        <Text style={styles.h3}>Очень большой и информативный текст</Text>
      </View>
    );
};

export default MoreInfo;

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
