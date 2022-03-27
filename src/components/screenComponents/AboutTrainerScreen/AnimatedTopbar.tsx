import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
} from "react-native";
import NavigationBackButton from "../../baseComponents/NavigationBackButton";
import AnimatedNavigationBackButton from "./AnimatedNavigationBackButton";

const AnimatedTopbar = ({ translation }: { translation: Animated.Value }) => {
  return (
    <>
      <Animated.View
        style={[
          styles.topbar,
          {
            opacity: translation.interpolate({
              inputRange: [-280, -230, -200, 0],
              outputRange: [1, 1, 0, 0],
            }),
          },
        ]}
      ></Animated.View>
      <AnimatedNavigationBackButton translation={translation} />
    </>
  );
};

export default AnimatedTopbar;

const styles = StyleSheet.create({
  topbar: {
    width: "100%",
    height: 98,
    position: "absolute",
    backgroundColor: "white",
  },
  view: {
    position: "absolute",
  },
});
