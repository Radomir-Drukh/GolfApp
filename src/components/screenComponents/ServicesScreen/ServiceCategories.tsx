import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Category from "../../baseComponents/Category";
import { StyleSheet, Text } from "react-native";

const ServiceCategories = ({
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
        text={"ОФП"}
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
        text={"Курс по приготовлению бутербродов"}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </ScrollView>
  );
};

export default ServiceCategories;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
});
