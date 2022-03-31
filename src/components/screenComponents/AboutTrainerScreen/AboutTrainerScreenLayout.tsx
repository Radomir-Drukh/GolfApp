import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TrainerInfo from "./TrainerInfo";
import NavigationBackButton from "../../baseComponents/NavigationBackButton";
import BookButton from "../../baseComponents/BookButton";
import AnimatedTopbar from "./AnimatedTopbar";

const AboutTrainerScreenLayout = ({
  openModalize,
}: {
  openModalize: () => void;
}) => {
  const trainerPic =
    "https://s3-alpha-sig.figma.com/img/9023/ee77/a1c490431c8d297388425543e85b27e7?Expires=1648425600&Signature=Q4KIOKEVfJWm2jS2Kzk5QjHoUoEmVKaHhgUEB1MhY5jjFXK1u8vuQhdgdGSvbfZp-sHe-ZKdYdW7bCjb-s0Ph00x8u8rstt4xeuXRaS6ilDaAWyYprLsHbMV8gH-x6bmDWk7E8FcNUgHjxm-4P9cztCThQsZqCFCHRYJ4nIw6-tPgBsU2lSs1-8dKgy3lZbeb67URFrRknjXzB7mg2L-fiSzwVREIvpA-eXKXONSSS5Ppm0iOwmGbjY8mj9o4JGL2h-c7sjHKAmVwL6mb3I~AIs2xuFjXtU3cwWH9L0wO0kd2c5Iz6TxT~F9CiWE9HJ6d5-g5yHVBD6q8AsvUO6Qiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  let state: number;

  const translation = useRef(new Animated.Value(0)).current;

  let previousTranslation: number = 0;

  const [headerVisible, setHeaderVisible] = useState(false);

  return (
    <Fragment>
      <Image
        style={styles.image}
        source={{
          uri: trainerPic,
        }}
      ></Image>
      <Animated.View
        style={[
          styles.info,
          {
            transform: [
              {
                translateY: translation,
              },
            ],
          },
        ]}
      >
        <TrainerInfo />
      </Animated.View>
      <View
        style={styles.scrollingView}
        onMoveShouldSetResponder={() => true}
        onResponderMove={(e) => {
          let diff = state - e.nativeEvent.locationY;
          if (diff > 100) diff = 0;
          previousTranslation -= diff;
          if (previousTranslation < -280) previousTranslation = -280;
          if (previousTranslation > 0) previousTranslation = 0;
          translation.setValue(previousTranslation);
          state = e.nativeEvent.locationY;
          //console.log(previousTranslation);
        }}
        onTouchStart={(e) => {
          state = e.nativeEvent.locationY;
        }}
      ></View>
      <AnimatedTopbar translation={translation} />
      <BookButton openModalize={openModalize} />
    </Fragment>
  );
};

export default AboutTrainerScreenLayout;

const styles = StyleSheet.create({
  info: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    height: "100%",
    position: "absolute",
    marginTop: 300,
  },
  scrollView: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    position: "absolute",
  },
  scrollingView: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  image: {
    width: "100%",
    height: 300,
    marginTop: 20,
  },
});
