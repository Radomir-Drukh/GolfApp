import React from "react";
import { View } from "react-native";

const GrayLine = () => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        width: "95%",
        height: 2,
        marginHorizontal: "2.5%",
        marginVertical: 15,
      }}
    ></View>
  );
};

export default GrayLine;
