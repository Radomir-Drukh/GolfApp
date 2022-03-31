import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ClubInfoCard from "./ClubInfoCard";
import NewsCard from "./NewsCard";

const MainScreenLayout = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={styles.h2}>Бронируйте корты прямо в приложении</Text>
      <Text style={styles.h1}>Последние новости</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <NewsCard
          date="04.11.2018"
          text="Димитров выиграл главный титул"
          picture="https://s3-alpha-sig.figma.com/img/8300/cf81/5c71e6926c0f37f1fd2e26c401eb50af?Expires=1649635200&Signature=dFEmi~YWNuW6xW6-NUXH6H5r5Uk6J8ILsZBpiW5iIJGxiJtPVbwAVmGXGkyRYvZ3PgIk8eV6~Ig3sfYM33wzflyGl6Q78A38LZByZerYDTd3UcylLZL3ZXGS7eL4CWziMdOHxRgT6ifaDBoJlt3wzp4xKO-SRwKfUfJhojShErVvz5WrzRvs0FymUnty-FPUgfwTR~w4nRHHkFSjiG8BfkI7rYIWAZhVyN8FZpTwsatDNtFE3zkwOhoxiTizNefBN3WUoq42X-0dv88x1Fb7iQsUdj6XTi9EpSnnHS06FBohAG5FT2WolOhIPG7ncpagbACuxpjIY82WrSpLk9kwBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <NewsCard
          date="04.11.2018"
          text="У Федерера почти 111 миллионов призовых"
          picture="https://s3-alpha-sig.figma.com/img/a972/128e/266b6993045365346c4d9fdfb0621d13?Expires=1649635200&Signature=M0NVUZdq8x4aED9K~ytBz1MXVHgo4BWwwO6RwxQaVKdTXurV1rpxVPnNwdSpRlxhzCDtclOskJUoubesmuF0PObcIGFf~Nh4FuJQTQL0PINdHzPcL1DRbszEvwPUwX3Aw4qkHJvKheK-rVM5-RjMnBkPXDDujHMCOgDIQShXt16H~zvMs9ng2b8HQiVutJmhhgICPG96~Q27FraYCOuEcQqy5ZUMkNoGuEqyVYKH8GVMMuXih2YS6bXUgyyHK4u91b6DAPcGHGOXcRca-fvFkiQreVDNOifDm7y~~U8GxAnbZG-qahyl~7OXWh-w0iKQXiY719lELm66s1Srd7NSgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <NewsCard
          date="16.12.2019"
          text="У Федерера теперь 250 миллионов призовых(("
          picture="https://s3-alpha-sig.figma.com/img/a972/128e/266b6993045365346c4d9fdfb0621d13?Expires=1649635200&Signature=M0NVUZdq8x4aED9K~ytBz1MXVHgo4BWwwO6RwxQaVKdTXurV1rpxVPnNwdSpRlxhzCDtclOskJUoubesmuF0PObcIGFf~Nh4FuJQTQL0PINdHzPcL1DRbszEvwPUwX3Aw4qkHJvKheK-rVM5-RjMnBkPXDDujHMCOgDIQShXt16H~zvMs9ng2b8HQiVutJmhhgICPG96~Q27FraYCOuEcQqy5ZUMkNoGuEqyVYKH8GVMMuXih2YS6bXUgyyHK4u91b6DAPcGHGOXcRca-fvFkiQreVDNOifDm7y~~U8GxAnbZG-qahyl~7OXWh-w0iKQXiY719lELm66s1Srd7NSgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </ScrollView>
      <Text style={styles.h1}>Информация о клубе</Text>
      <ClubInfoCard
        title={"Новогорск-2. Теннисный клуб"}
        address={"Новогорск, ул. Заречная, вл.8 (поселок Новогорск-2)"}
      />
    </View>
  );
};

export default MainScreenLayout;

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    marginTop: 25,
    marginHorizontal: 15,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.6)",
    marginHorizontal: 20,
    width: "40%",
  },
  h3: {
    marginTop: 5,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  h4: {
    fontSize: 16,
    color: "rgba(49, 113, 211, 1)",
  },
});
