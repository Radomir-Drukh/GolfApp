import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import TrainerAchievements from "../components/TrainerAchievements";

const TrainerInfo = () => {
  return (
    <View>
      <Text style={styles.h1}>Рустам Валиев</Text>
      <Text style={styles.h4}>
        Главный тренер, руководитель школы «ТимСтори». Сертифицированный тренер
        по работе с теннисистами до 10 лет (ФТР,PTR).
      </Text>
      <TrainerAchievements />
      <Text style={styles.h2}>О тренере</Text>
      <Text style={styles.h3}>
        Выполнил мастера спорта по теннису в 17 лет. Победитель и призёр более
        чем в 70 российских и международных турниров. Окончил Уральский
        Федеральный Университет физической культуры , спорта. Сертифицированный
        тренер Федерации Тенниса России. Среди учеников победители и призеры
        турниров ТЕ и РТТ.
      </Text>
    </View>
  );
};

export default TrainerInfo;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 25,
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
});
