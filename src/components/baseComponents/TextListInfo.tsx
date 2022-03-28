import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import TextListInfoItem from "./TextListInfoItem";

const TextListInfo = ({ strings }: { strings: string[] }) => {
  return (
    <View>
      {strings.map(function (item, index) {
        return <TextListInfoItem text={item} key={item + index.toString()} />;
      })}
    </View>
  );
};

export default TextListInfo;
