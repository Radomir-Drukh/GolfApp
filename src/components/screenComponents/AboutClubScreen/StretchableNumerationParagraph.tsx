import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Touchable,
} from "react-native";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import TextListInfo from "../../baseComponents/TextListInfo";

const StretchableNumerationParagraph = ({
  title,
  strings,
  shownStrings,
}: {
  title: string;
  strings: string[];
  shownStrings: number;
}) => {
  if (strings.length <= shownStrings)
    return (
      <View>
        <Text style={styles.h2}>{title}</Text>
        <TextListInfo strings={strings} />
      </View>
    );
  else {
    const [showMore, setShowMore] = useState(false);
    return (
      <View>
        <Text style={styles.h2}>{title}</Text>
        <TextListInfo
          strings={showMore ? strings : strings.slice(0, shownStrings)}
        />
        <TouchableNativeFeedback
          onPress={() => {
            setShowMore(!showMore);
          }}
        >
          <Text style={styles.h4}>
            {showMore ? "Скрыть" : "Читать подробнее"}
          </Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
};

export default StretchableNumerationParagraph;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    marginTop: 10,
    marginHorizontal: 15,
  },
  h2: {
    fontSize: 16,
    marginHorizontal: 15,
    marginTop: 8,
  },
  h3: {
    fontSize: 15,
    marginHorizontal: 15,
    marginTop: 8,
    color: "rgba(0, 0, 0, 0.6)",
  },
  h4: {
    fontSize: 14,
    marginHorizontal: 15,
    marginTop: 10,
    color: "rgba(49, 113, 211, 1)",
  },
  view: {
    backgroundColor: "white",
  },
});
