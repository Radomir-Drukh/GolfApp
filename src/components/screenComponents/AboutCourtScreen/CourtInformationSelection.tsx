import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CourtInformationSelection = ({
  moreSelected,
  setMoreSelected,
}: {
  moreSelected: boolean;
  setMoreSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.infoType,
            { borderColor: moreSelected ? "#3171D3" : "rgba(0, 0, 0, 0.1)" },
          ]}
          onPress={() => setMoreSelected(true)}
        >
          <Text
            style={[
              styles.text,
              { color: moreSelected ? "#3171D3" : "rgba(0, 0, 0, 0.6)" },
            ]}
          >
            Подробнее
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.infoType,
            { borderColor: moreSelected ? "rgba(0, 0, 0, 0.1)" : "#3171D3" },
          ]}
          onPress={() => setMoreSelected(false)}
        >
          <Text
            style={[
              styles.text,
              { color: moreSelected ? "rgba(0, 0, 0, 0.6)" : "#3171D3" },
            ]}
          >
            Дополнительно
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourtInformationSelection;

const styles = StyleSheet.create({
  view: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 15,
  },
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    width: "93%",
    borderRadius: 10,
  },
  infoType: {
    backgroundColor: "white",
    height: "100%",
    width: (windowWidth * 0.8) / 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 18,
    borderWidth: 1.5,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
});
