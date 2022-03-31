import React, { useContext } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import SignUpContext from "../../../contexts/SignUpContext";
import { Entypo } from "@expo/vector-icons";

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

const AmountPicker = ({ text, active }: { text: string; active: boolean }) => {
  const signUpContext = useContext(SignUpContext);

  if (active)
    return (
      <View style={styles.view}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ marginLeft: "15%" }}>{text}</Text>
        </View>
        <View style={styles.container}>
          <Pressable
            style={styles.button}
            onPress={() => {
              if (signUpContext.amount > 1)
                signUpContext.setAmount(signUpContext.amount - 1);
            }}
          >
            <Entypo name="minus" size={15} color="black" />
          </Pressable>
          <Text>{signUpContext.amount}</Text>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: "rgba(49, 113, 211, 1)" },
            ]}
            onPress={() => {
              signUpContext.setAmount(signUpContext.amount + 1);
            }}
          >
            <Entypo name="plus" size={15} color="white" />
          </Pressable>
        </View>
      </View>
    );
  else
    return (
      <View style={styles.view}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ marginLeft: "15%" }}>{text}</Text>
        </View>
        <View style={styles.container}>
          <Text style={{ color: "rgba(49, 113, 211, 1)" }}>
            {signUpContext.amount.toString() +
              " " +
              declOfNum(signUpContext.amount, ["час", "часа", "часов"])}
          </Text>
        </View>
      </View>
    );
};

export default AmountPicker;

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: 75,
    //marginHorizontal: "2.5%",
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 38,
    height: 38,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
});
