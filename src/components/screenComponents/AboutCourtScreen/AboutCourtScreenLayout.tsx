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
import CourtInfo from "./CourtInfo";
import NavigationBackButton from "../../baseComponents/NavigationBackButton";
import BookButton from "../../baseComponents/BookButton";
import AnimatedTopbar from "../AboutTrainerScreen/AnimatedTopbar";

const AboutCourtScreenLayout = ({
  openModalize,
}: {
  openModalize: () => void;
}) => {
  const courtPic =
    "https://s3-alpha-sig.figma.com/img/e812/bfe0/8f0f41c1eb6a1f6ee4c62dd81193e5a8?Expires=1649030400&Signature=IQx9IoDpAjFlYRYGn9t-zNC1R7H2PugkrvvEvjfW98p6ZTQZ2GOi0vob9URCIj2zzyrYT05zmUHcyQOWeHGT8J7QnUfXvSRy2aEOY4dxXsNNs49ksl3dN2p0iDYvtZkL~-p7G1Fxjk5VyjjqLKiM~f~FIdyeJcETGy7Az40zihgr8cV5V74mbT12DT9sllj7TwXulsLTpJxveBMb3Dghc4SDr5m~z2cok2C4cLwO6pQCXH9-7YytF3WitpOXU~kP8z7VVwdlwv-usVLVlcpqvVosvkVDAkdVWvYLqDUXnct0JTizMPMYhVc7roe45s6i3kDqzDx5OrTbRxC6YfGAnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

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
        <CourtInfo />
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
      <BookButton openModalize={openModalize} />
    </Fragment>
  );
};

export default AboutCourtScreenLayout;

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
