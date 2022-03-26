import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

/*{
  headerVisible,
}: {
  headerVisible: boolean;
}*/

const NavigationBackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable style={styles.button} onPress={navigation.goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default NavigationBackButton;

const styles = StyleSheet.create({
  button: {
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
  },
  header: {
    width: "100%",
    height: 88,
    position: "absolute",
  },
  buttonOnHeader: {
    borderRadius: 10,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 15,
  },
});
