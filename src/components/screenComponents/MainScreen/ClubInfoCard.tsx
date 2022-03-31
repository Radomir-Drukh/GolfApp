import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const ClubInfoCard = ({ title, address }) => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const pic =
    "https://s3-alpha-sig.figma.com/img/42c8/c5e2/669736fbcfc70f278af20caa3742a452?Expires=1649635200&Signature=eXH6faBVo28slQhzzxGSx1DAgAkJdFwYdkndTy4UiAV58Ek8nmbk8kUHG5~i1HwXi~FzBatcYh9asr~fcVUZUwaX0zS0UBlxJwAmynkK41s4ndYbroRs18UUpIIzR346Fa1rb6IZihwN9RXm0A3g1NX~kXoIyljqxCHBc87xrTXRMrSy5NfEprH66ztS1yKUaTzPYPrzARtnS~oIC002wdMbvuRKImhEdX5wlATR-V3tqav~AEXdrvl7p6~rcJfzJ2Lv59etl0akKh3FzfZwW2PT2pI7Tbc4s~SjWz3abunix9G0Mnd5iaB3kJXbpXyiF2a-qCJnIlUHSq5th0ikTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.h2}>{title}</Text>
        <Text style={styles.h3}>{address}</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigate("О клубе");
          }}
        >
          <Text style={styles.h4}>Подробнее</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, overflow: "hidden", marginLeft: "48%" }}>
        <Image style={styles.image} source={{ uri: pic }}></Image>
      </View>
    </View>
  );
};

export default ClubInfoCard;

const styles = StyleSheet.create({
  card: {
    height: 162,
    width: "93%",
    borderRadius: 12,
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "rgba(49, 113, 211, 1)",
    marginHorizontal: 15,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 16,
    transform: [{ rotate: "75deg" }],
    resizeMode: "contain",
    marginRight: 50,
  },
  info: {
    marginLeft: 15,
    height: "100%",
    width: "50%",
    justifyContent: "center",
    position: "absolute",
  },
  button: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 8,
    width: 132,
    height: 36,
  },
  h1: {
    fontSize: 28,
    marginTop: 25,
    marginHorizontal: 15,
  },
  h2: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
  },
  h3: {
    marginTop: 5,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  h4: {
    fontSize: 16,
    color: "rgba(49, 113, 211, 1)",
  },
  scrollView: {
    backgroundColor: "white",
    flex: 1,
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
    marginBottom: 20,
    position: "absolute",
  },
});
