import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";
import { StyleSheet, Text } from "react-native";

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  //console.log(selectedCategory);

  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
    >
      <Category
        text={"Все"}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Category
        text={"Теннис"}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Category
        text={"Настольный теннис"}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Category
        text={"Большой теннис"}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Category
        text={"Поедание бутербродов на скорость"}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffffff",
  },
});
