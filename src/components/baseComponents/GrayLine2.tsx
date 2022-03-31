import React from "react";
import { View } from "react-native";

const GrayLine2 = ({ width }: { width: string }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        width: width,
        height: 2,
        marginVertical: 10,
      }}
    ></View>
  );
};

export default GrayLine2;
