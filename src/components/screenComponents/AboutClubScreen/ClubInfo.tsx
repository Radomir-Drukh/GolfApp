import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Adress from "../../baseComponents/Adress";
import GrayLine from "../../baseComponents/GrayLine";
import StretchableNumerationParagraph from "./StretchableNumerationParagraph";
import StretchableParagraph from "./StretchableParagraph";

const ClubInfo = () => {
  const [moreSelected, setMoreSelected] = useState(true);
  return (
    <View style={styles.view}>
      <StretchableParagraph
        shownCharacters={100}
        title="Преимущества"
        text="Отдельно хотелось бы сказать о расположении нашего теннисного клуба. Территория расположена возле реки Сходня, в самом прекрасном месте в обозримой Вселенной сразу после Рая и штаб-квартиры Brazzers"
      />
      <GrayLine />
      <StretchableNumerationParagraph
        title="Подробнее о тренировках"
        shownStrings={3}
        strings={[
          "предоставляется аренда теннисного корта;",
          "всегда можно заказать персональный урок с тренером, особенно это уместно будет новичкам;",
          "всегда открыта школа тенниса для детей и для взрослых.",
          "ну не знаю можете еще что-то поделать здесь лмао",
        ]}
      />
      <GrayLine />
      <StretchableParagraph
        shownCharacters={100}
        title="Немного о комфорте"
        text="Мы позаботились о том, чтобы ваше время в нашей школе проходило максимально комфортно. Поэтому, на территории клуба регулярно устраиваются королевские битвы насмерть с призовым фондом в 10 миллионов долларов. Все необходимое снаряжение можно найти на территории школы"
      />
      <GrayLine />
    </View>
  );
};

export default ClubInfo;

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
