import React from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AnimatedNavigationBackButton = ({
  translation,
}: {
  translation: Animated.Value;
}) => {
  const navigation = useNavigation();
  return (
    <>
      <Animated.View
        style={[
          styles.background,
          {
            opacity: translation.interpolate({
              inputRange: [-280, -230, -200, 0],
              outputRange: [0, 0, 0.6, 0.6],
            }),
          },
        ]}
      />
      <Pressable style={styles.button} onPress={navigation.goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </>
  );
};

export default AnimatedNavigationBackButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 15,
    position: "absolute",
  },
  background: {
    borderRadius: 10,
    backgroundColor: "grey",
    width: 48,
    height: 48,
    opacity: 0.6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 15,
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
