import React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <View style={{ width: "100%" }}>
      <Pressable
        onPress={onClose}
        style={{
          marginLeft: 10,
          marginTop: 10,
          height: 24,
          width: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/close-sharp.png")}
          style={{
            height: 24,
            width: 24,
          }}
        />
      </Pressable>
    </View>
  );
};

export default CloseButton;
