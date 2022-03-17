import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const AboutTrainerScreen = () => {
  const trainerPic =
    "https://s3-alpha-sig.figma.com/img/9023/ee77/a1c490431c8d297388425543e85b27e7?Expires=1648425600&Signature=Q4KIOKEVfJWm2jS2Kzk5QjHoUoEmVKaHhgUEB1MhY5jjFXK1u8vuQhdgdGSvbfZp-sHe-ZKdYdW7bCjb-s0Ph00x8u8rstt4xeuXRaS6ilDaAWyYprLsHbMV8gH-x6bmDWk7E8FcNUgHjxm-4P9cztCThQsZqCFCHRYJ4nIw6-tPgBsU2lSs1-8dKgy3lZbeb67URFrRknjXzB7mg2L-fiSzwVREIvpA-eXKXONSSS5Ppm0iOwmGbjY8mj9o4JGL2h-c7sjHKAmVwL6mb3I~AIs2xuFjXtU3cwWH9L0wO0kd2c5Iz6TxT~F9CiWE9HJ6d5-g5yHVBD6q8AsvUO6Qiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Image
        style={{
          width: "100%",
          height: 300,
          marginTop: 20,
        }}
        source={{
          uri: trainerPic,
        }}
      ></Image>
      <View style={styles.info}></View>
    </View>
  );
};

export default AboutTrainerScreen;
/*
<Image
        style={{
          width: "100%",
          height: "50%",
          marginTop: 20,
        }}
        source={{
          uri: trainerPic,
        }}
      ></Image>*/

const styles = StyleSheet.create({
  info: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 300,
  },
});
