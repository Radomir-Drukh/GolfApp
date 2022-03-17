import React from "react";
import { Image, Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TrainerScreenTitle = ({ navigation, route, options, back }) => {
  return (
    <View>
      <Pressable
        style={{
          borderRadius: 10,
          backgroundColor: "grey",
          width: 48,
          height: 48,
          opacity: 0.9,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          marginLeft: 15,
          position: "absolute",
        }}
        onPress={navigation.goBack}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default TrainerScreenTitle;
