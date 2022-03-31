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
import ServiceInfo from "./ServiceInfo";
import NavigationBackButton from "../../baseComponents/NavigationBackButton";
import BookButton from "../../baseComponents/BookButton";
import AnimatedTopbar from "../AboutTrainerScreen/AnimatedTopbar";

const AboutServiceScreenLayout = ({
  openModalize,
}: {
  openModalize: () => void;
}) => {
  const servicePic =
    "https://s3-alpha-sig.figma.com/img/35cf/4e75/507881cefdaea0840cf5486a665fa710?Expires=1649635200&Signature=WUG34uW3jjjfRd3XCWsz7xTRz54oaCfGBYt-~hUpV5ubfzY0S~oRDW86NqoDZXXlC128agZvThZQuq4n55UG6MuHImsXs2fqSaTeJtP-uAgypFfmv71Y4RsKS8f0p3qysnyi0yWu4JMhHXbHvexicG2N-YcW4RUeK9DvUm9xTsBgsMmiI769946rDeiN020LQd6YlgB2NuvD8mnwOYs1g7GwvrcAmQ~b8PqfoVg3dUx2uGFrqKnzPHHfm--0QopgT88j7ep-Kj4Zcd818D-LkDqG0lh9Q~LaBRU7xCIH2S53g56edokpxF9vlxSatmAx-pWkA5ddG7ayfkwCFEJ27Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  let state: number;

  const translation = useRef(new Animated.Value(0)).current;

  let previousTranslation: number = 0;

  const [headerVisible, setHeaderVisible] = useState(false);

  return (
    <Fragment>
      <Image
        style={styles.image}
        source={{
          uri: servicePic,
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
        <ServiceInfo />
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
      <BookButton text={"Записаться"} openModalize={openModalize} />
    </Fragment>
  );
};

export default AboutServiceScreenLayout;

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
