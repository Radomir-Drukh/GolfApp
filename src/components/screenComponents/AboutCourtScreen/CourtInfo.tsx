import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import CourtAdress from "./CourtAdress";
import CourtInformationSelection from "./CourtInformationSelection";
import MoreInfo from "./MoreInfo";

const CourtInfo = () => {
  const [moreSelected, setMoreSelected] = useState(true);
  return (
    <View style={styles.view}>
      <CourtAdress adress={"Новогорск, ул. Заречная, вл.8"} />
      <Text style={styles.h1}>Крытый корт</Text>
      <Text style={styles.h2}>О корте</Text>
      <Text style={styles.h3}>
        Закрытые теннисные корты находятся в воздухоопорном сооружении с
        покрытием хард US OPEN с 10 слоями смягчения. Клуб оснащён самой
        современной системой кондиционирования, которая позволяет поддерживать
        максимально комфортные условия вне зависимости от времени года: +
        18-20°C.
      </Text>
      <CourtInformationSelection
        moreSelected={moreSelected}
        setMoreSelected={setMoreSelected}
      />
      <MoreInfo moreSelected={moreSelected} />
    </View>
  );
};

export default CourtInfo;

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
