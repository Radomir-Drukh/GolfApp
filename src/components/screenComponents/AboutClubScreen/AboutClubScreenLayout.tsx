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
import ClubInfo from "./ClubInfo";
import NavigationBackButton from "../../baseComponents/NavigationBackButton";
import BookButton from "../../baseComponents/BookButton";
import AnimatedTopbar from "../AboutTrainerScreen/AnimatedTopbar";
import ClubCard from "./ClubCard";

const AboutClubScreenLayout = () => {
  const courtPic =
    "https://s3-alpha-sig.figma.com/img/db6e/3f8c/03aeca37eae5128a455d8810e03346f6?Expires=1649635200&Signature=QYtRqQGmLfkoTE9Muir6BW1ZvnuHnmKVRgjsUKUDSTo2HgRGaMrGyc9SuTdzxlFLdlia-IJYp4jIhv2~Zt7ekNLOZDr3uEj9zUe-gkPYt50q4-859zNta3-wzq5M1R2ui8KFJk4K-phHH4vkxizcu4IOa8sd7Dux5bhgxED1aMx6n6MfioYl0Qd1OhSdON1EH9DOzxYM39wkvHQdjGgAAVDAz7LdOTM9BzWToxQiNBV-P0y7RXsRM2bWWobC~XL6sIUXL2vF5~FE7H2kPkUVhkItwAEdi0XVd0LOgJA2yrmlFCr8tH11JpZhBQVgyl0WSubvGjhVlO2hC4HcjBxLqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  let state: number;

  const translation = useRef(new Animated.Value(0)).current;

  let previousTranslation: number = 0;

  const [headerVisible, setHeaderVisible] = useState(false);

  return (
    <Fragment>
      <Image
        style={styles.image}
        source={{
          uri: courtPic,
        }}
      ></Image>
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "white" }}
      ></View>
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
        <ClubCard
          title={"Новогорск-2. Теннисный клуб"}
          address={"Новогорск, ул. Заречная, вл.8 (поселок Новогорск-2)"}
        />
        <ClubInfo />
      </Animated.View>
      <View
        style={styles.scrollingView}
        onMoveShouldSetResponder={() => true}
        onResponderMove={(e) => {
          let diff = state - e.nativeEvent.locationY;
          if (diff > 100) diff = 0;
          previousTranslation -= diff;
          if (previousTranslation < -600) previousTranslation = -600;
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
    </Fragment>
  );
};

export default AboutClubScreenLayout;

const styles = StyleSheet.create({
  info: {
    //backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    height: "100%",
    position: "absolute",
    marginTop: 270,
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
