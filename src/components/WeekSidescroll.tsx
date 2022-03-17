import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import DateTimeContext from "../contexts/DateTimePickerContext";

const WeekSidescroll = ({ chosenDay }) => {
  let DATA: { number: string; weekday: string }[] = [];

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
  const [selectedNumber, changeSelectedNumber] = useState(chosenDay);

  const dateTimeSetters = useContext(DateTimeContext);

  useEffect(() => {
    dateTimeSetters.setChosenDateDay(selectedNumber);
  });

  const renderItem = ({ item }) => (
    <Item number={item.number} weekday={item.weekday} />
  );

  const Item = ({ weekday, number }) => (
    <Pressable
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
    </Pressable>
  );

  const [currentLeftItemIndex, setCurrentLeftItemIndex] = useState(0);

  const animatedFlatlistRef =
    useRef<FlatList<{ number: string; weekday: string }>>(null);

  let lastContentOffset = useSharedValue(0);
  let isScrolling = useSharedValue(false);
  const onScroll = (event) => {
    if (
      lastContentOffset.value > event.nativeEvent.contentOffset.x + 10 &&
      isScrolling.value
    ) {
      //console.log("Left");
      lastContentOffset.value = event.nativeEvent.contentOffset.x;
      if (
        animatedFlatlistRef.current !== null &&
        Math.ceil(currentLeftItemIndex / 7) * 7 - 7 >= 0
      ) {
        /*console.log(
          "Trying to scroll left to",
          Math.ceil(currentLeftItemIndex / 7) * 7 - 7
        );*/
        animatedFlatlistRef.current.scrollToIndex({
          animated: true,
          index: Math.ceil(currentLeftItemIndex / 7) * 7 - 7,
        });
        setCurrentLeftItemIndex(Math.ceil(currentLeftItemIndex / 7) * 7 - 7);
      }
    } else if (
      lastContentOffset.value < event.nativeEvent.contentOffset.x - 10 &&
      isScrolling.value
    ) {
      //console.log("Right");
      lastContentOffset.value = event.nativeEvent.contentOffset.x;
      if (
        animatedFlatlistRef.current !== null &&
        Math.floor(currentLeftItemIndex / 7) * 7 + 7 < 30
      ) {
        /*console.log(
          "Trying to scroll right to",
          Math.floor(currentLeftItemIndex / 7) * 7 + 7 < 30
        );*/
        animatedFlatlistRef.current.scrollToIndex({
          animated: true,
          index: Math.floor(currentLeftItemIndex / 7) * 7 + 7,
        });
        setCurrentLeftItemIndex(Math.floor(currentLeftItemIndex / 7) * 7 + 7);
      }
    }
  };

  const onBeginDrag = (e) => {
    isScrolling.value = true;
    lastContentOffset.value = e.nativeEvent.contentOffset.x;
  };

  const onEndDrag = (e) => {
    isScrolling.value = false;
  };

  return (
    <View>
      <Text style={{ fontSize: 20, paddingTop: "7%", paddingLeft: "3%" }}>
        Выберите время записи
      </Text>
      <FlatList
        onScroll={onScroll}
        onScrollBeginDrag={onBeginDrag}
        onScrollEndDrag={onEndDrag}
        style={{ paddingTop: 20, paddingHorizontal: 5 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.number + item.weekday}
        initialNumToRender={10}
        ref={animatedFlatlistRef}
      />
    </View>
  );
};

export default WeekSidescroll;

const styles = StyleSheet.create({
  item: {
    paddingTop: 5,
    marginVertical: 8,
    marginHorizontal: 6.5,
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
