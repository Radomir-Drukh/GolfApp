import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function WeekSidescroll() {
  let DATA = [];

  for (var i = 1; i < 30; i++) {
    let day = { number: i.toString(), weekday: i.toString() };
    DATA.push(day);
    switch (i % 7) {
      case 1:
        DATA[i - 1].weekday = "M";
        break;
      case 2:
        DATA[i - 1].weekday = "T";
        break;
      case 3:
        DATA[i - 1].weekday = "W";
        break;
      case 4:
        DATA[i - 1].weekday = "T";
        break;
      case 5:
        DATA[i - 1].weekday = "F";
        break;
      case 6:
        DATA[i - 1].weekday = "S";
        break;
      case 0:
        DATA[i - 1].weekday = "S";
        break;
    }
  }

  /*const iterator = DATA.keys();

  for (const key of iterator) {
    console.log(key);
  }*/

  const [selectedNumber, changeSelectedNumber] = useState(0);

  const renderItem = ({ item }) => (
    <Item number={item.number} weekday={item.weekday} />
  );

  const Item = ({ weekday, number }) => (
    <TouchableOpacity
      onPress={() => {
        changeSelectedNumber(number);
      }}
      style={styles.day}
    >
      <Text style={styles.weekday}>{weekday}</Text>
      <View
        style={[
          styles.item,
          {
            backgroundColor: number === selectedNumber ? "#FFEF00" : "#FFFFFF",
          },
        ]}
      >
        <Text
          style={[
            styles.number,
            {
              backgroundColor:
                number === selectedNumber ? "#FFEF00" : "#FFFFFF",
            },
          ]}
        >
          {number}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{ fontSize: 20, paddingTop: "7%", paddingLeft: "3%" }}>
        Выберите время записи
      </Text>
      <FlatList
        onScrollBeginDrag={() => console.log("begin")}
        onScrollEndDrag={() => console.log("end")}
        style={{ paddingTop: 20 }}
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.number + item.weekday}
        initialNumToRender={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    //backgroundColor: "#FFDF00",
    paddingTop: 5,
    marginVertical: 8,
    marginHorizontal: 5,
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    alignItems: "center",
  },
  weekday: {
    fontSize: 12,
    flex: 1,
    color: "black",
  },
  number: {
    fontSize: 26,
    height: 30,
    justifyContent: "center",
  },
  day: {
    alignItems: "center",
    justifyContent: "center",
  },
});
