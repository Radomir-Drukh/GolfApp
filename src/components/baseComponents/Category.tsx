import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, Text } from "react-native";

const Category = ({
  text,
  selectedCategory,
  setSelectedCategory,
}: {
  text: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const isSelected: boolean = text === selectedCategory;

  return (
    <Pressable
      onPress={() => {
        setSelectedCategory(text);
      }}
      style={[
        styles.button,
        {
          backgroundColor: isSelected ? "#3171D3" : "white",
          marginLeft: text === "Все" ? 15 : 5,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isSelected ? "white" : "#000000",
            opacity: isSelected ? 1 : 0.6,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderColor: "#F5F5F5",
    borderWidth: 2,
    marginBottom: 10,
    height: 39,
  },
  text: {
    fontSize: 16,
    marginHorizontal: 14,
    marginTop: 6,
    marginBottom: 10,
  },
});
