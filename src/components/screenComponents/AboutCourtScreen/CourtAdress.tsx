import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const CourtAdress = ({ adress }: { adress: string }) => {
  return (
    <View style={styles.view}>
      <Image
        source={require("../../../assets/location-outline.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Новогорск, ул. Заречная, вл.8</Text>
    </View>
  );
};

export default CourtAdress;

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
    tintColor: "#3171D3",
  },
  view: {
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 15,
  },
  text: {
    fontSize: 13,
    color: "#000000",
    opacity: 0.6,
    marginLeft: 10,
  },
});
