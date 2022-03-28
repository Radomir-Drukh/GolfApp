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
import ServiceCard from "./ServiceCard";

type Card = {
  uri: string;
  price: string;
  name: string;
  categories: string[];
};

const ServicesCards: Card[] = [
  {
    uri: "https://s3-alpha-sig.figma.com/img/26d1/df90/d5944a943d2797b50fab1a66a8cc7767?Expires=1649635200&Signature=Q73A95le2Km-Y~i4nFG8p3x8VZiZunoon-om1S7tUoha6mNITf0WzcytGbqXwIQL1DiLukuXfjSerIzDXDbIcWgmsR2PzE-DWVOa7F21iIeksukoLEHo-d8ZtWJA~0I31Eq4wTVPp950sMJP33sY7LM7K5PgYpRgxxl~OIwSbbCOUtNCLoGR3S-iQLYCAhnb7ZpyH7LWPgTHvGlfJPyJo9RnCkd9NJTk795YBCOzp05JsiXKrrdj3-omu3kITuxR4h7SInQo0fyupOWJxEkJj4TJTTG6Y3nbn738BuyCFx-e-GQZ63PZJwoAkw2tfou190-tyUV1cSsMSZNzwqI0CA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "450",
    name: "Тренировки по ОФП для взрослых",
    categories: ["ОФП"],
  },
  {
    uri: "https://s3-alpha-sig.figma.com/img/26d1/df90/d5944a943d2797b50fab1a66a8cc7767?Expires=1649635200&Signature=Q73A95le2Km-Y~i4nFG8p3x8VZiZunoon-om1S7tUoha6mNITf0WzcytGbqXwIQL1DiLukuXfjSerIzDXDbIcWgmsR2PzE-DWVOa7F21iIeksukoLEHo-d8ZtWJA~0I31Eq4wTVPp950sMJP33sY7LM7K5PgYpRgxxl~OIwSbbCOUtNCLoGR3S-iQLYCAhnb7ZpyH7LWPgTHvGlfJPyJo9RnCkd9NJTk795YBCOzp05JsiXKrrdj3-omu3kITuxR4h7SInQo0fyupOWJxEkJj4TJTTG6Y3nbn738BuyCFx-e-GQZ63PZJwoAkw2tfou190-tyUV1cSsMSZNzwqI0CA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "2500",
    name: "Индивудуальные занятия ОФП с личным тренером",
    categories: ["ОФП"],
  },
  {
    uri: "https://s3-alpha-sig.figma.com/img/7eca/1814/061a1daf0ddac086a9cea7a9cc10a465?Expires=1649635200&Signature=PDpyjGU4fID7kjjNpGsqwn4uH56lJQtsRd938rdVQUspGpbKFG9e0x3wFPnLxKgffWZCZORpZR4O2J1N2yAHMfJLH-QRbOHAnPlspqjOW0lom~dFKD8kFILtM24~LVwfUtTsxX0y3a-wXEC3Vu6S7LHkUS5ayNUCdruJhy1nSUU86HFvd8auHsfDMjkAZNUj2Seaahh6qliWcQaWuWQV4OUnofmodVSZsD1dmPHspJA7saTysk71Cu1cf1G8k3vX~l5a8bXTEO1TxuHeXjMOo6IHQmU9Q669LPeCnoDj1iKRMt2kx3qnssiLtxi6BZejnYXmV48mOSNy8oOKE5dJcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: "1500",
    name: "Групповые детские занятия с тренером",
    categories: ["ОФП"],
  },
  {
    uri: "http://multisport.ru/wp-content/uploads/IMG_0089.jpg",
    price: "1500",
    name: "Индивудуальные занятия по настольному теннису с личным тренером",
    categories: ["Настольный теннис"],
  },
  {
    uri: "https://www.gastronom.ru/binfiles/images/20200606/bde22f8c.jpg",
    price: "5000",
    name: "Часовой курс по приготовлению бутербродов от шеф-повара экстра класса",
    categories: ["Курс по приготовлению бутербродов"],
  },
];

const ServicesList = ({ selectedCategory }: { selectedCategory: string }) => {
  let DATA: JSX.Element[] = [];

  for (let i = 0; i < ServicesCards.length; i++)
    if (
      selectedCategory === "Все" ||
      ServicesCards[i].categories.includes(selectedCategory)
    )
      DATA.push(
        <ServiceCard
          price={ServicesCards[i].price}
          name={ServicesCards[i].name}
          picture={ServicesCards[i].uri}
          key={ServicesCards[i].name + i.toString()}
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

export default ServicesList;

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
