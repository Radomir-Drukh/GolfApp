import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TrainerCard from "./TrainerCard";

type Card = {
  uri: string;
  boldText: string;
  normalText: string;
  categories: string[];
};

const TrainerCards: Card[] = [
  {
    uri: "https://s3-alpha-sig.figma.com/img/4812/a043/881ce7fb6effcb15491cf2354c3b72a6?Expires=1649030400&Signature=fFKE0CfFQA29poY34ya7z9z2FaYPdtZO880Rb3Nh6O9Mf~7wQpuzDWmkEHP6iWTH-pcNzVKhfycOseuzl22pn6~uK9XUzXq0vGlElgTubj804M5jp9GCkCLkK0YEAW2L81-0PnrCi~LL8NBc-tw25kWST7UKMLgsTRnAKl9n2dvMdEnIM5z2rYWVzsqFUCTLINw38-W5TgZzXr7sZStqPze497PL9ESqEb4fyUDHFCSbIgGJ0XcdQF-RTWbKrZvjLPoHBjufUtKhJmejo8dnV2r~4HeJmkonAJsoerJ~UsUbup6Vr~UV5xx7hLNPgQl4CZMN-2NhB~Mhvvb-6R2iQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    boldText: "Ерохин Александр",
    normalText: "Тренерская категория “Мастер +”",
    categories: ["Теннис", "Настольный теннис"],
  },
  {
    uri: "https://s3-alpha-sig.figma.com/img/9137/dac1/e0caa1a0c05eb8f2ad1fe4c6160c560d?Expires=1649030400&Signature=CZ8qNuxsgOb5MBFgJbys0NuZ706vmK5HJuLReOpup33Gxk4XXTEij7GrwWzaCQV1X6gwSPnk5NM23qBDLYeV36MC0xlJ6joyKm84lBT36ELuNtkkYDS5lfK2GUTD15nSH5TYO-KHQX8soKJHHPvtody783nhs0HbsIN4z~DIA6urxPlydoPhLvbShDzPsdmIUBTJaG5LU--R6YVpnRgqf7-1cGXknmseiGEcJepaqDc441l5L5FuypxoUK5y~bPgOFe4NP8rrsTHKXxBKvFjYEsWSszzmCTkPArilllHalQFbxbvi~QKpn~jEeSCN7uYxz0Y5zQ9KcaihsBItUugXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    boldText: "Ерохин Михаил",
    normalText: "Тренерская категория “Мастер +”",
    categories: ["Теннис", "Большой теннис"],
  },
  {
    uri: "https://s3-alpha-sig.figma.com/img/0511/fea9/23badbd1b5b5829278dc6acc323e6e20?Expires=1649030400&Signature=KK~Q6uaZzYCynxZNdfwY65khcH5SxSbxC4AA2BVUmNOVNzSj2mDYcLuekwkWai0WRs5ndODdmFNOpNuaT8UGV4YOxuT2-phocVHssxt99u8VUmETqj4Ycq8RxdfZB6NI0bR5naen1HAzJZFARY40jZKDhpAvJ6l5Ah6d9hqf-2PkTpQdGJZ3ADjTfBwxkhNVygj65nPJdMs1ZjT7o3KXWP7dDUKTcjk7EOtXapPu7aFARfr7BvPBApM3-zCVijfMDqOCEcmoyQJqwzBurwQ4jyzJpWOfs3KuhRnUmFNx9KtVE3YXT9aG3GxI4tBhvM88MnGrVlVWJ7Le4Ph512yz-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    boldText: "Шахов Евгений",
    normalText: "Тренер-спарринг",
    categories: ["Теннис", "Настольный теннис", "Большой теннис"],
  },
  {
    uri: "https://s3-alpha-sig.figma.com/img/5170/e144/d3b06494b83235524c85b95f8dfc9c68?Expires=1649030400&Signature=HgVthUsKDdvY7E6l1xbn-XP~SGxdl8apdoDdKgVwJ1Zm7XHlINwAXz7O18mJKc8gIN3YFMGlmXucD1WEXSDhm6AAbX-MCSeg7VxFKa2fhoKbW3HCdSydTPfIYW~XwVukDSfYwF4QzczWrQjbE2wwX5qRWF4UsHF-FXepSxfCAyi7Zf4Fyt2aPESoL31mNgYb0YHbp8aI8COEqyFA1B7CYT828M6UBZOWy4Yoy1YvcFo-W~MviHEK7FfOOTre6CoCpUkgheCau8Xw~RTJbDtGgUBqvPLPEOPrXBxuWYXrbe0oflqttq9vgCpZwk~Oc0T79jEUQtEf2n1mvR0KDpIkVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    boldText: "Шахалилов Руслан",
    normalText: "Тренерская категория “Мастер +”",
    categories: ["Поедание бутербродов на скорость"],
  },
  {
    uri: "https://s3-alpha-sig.figma.com/img/be96/7902/3072e3444661b590589e5b6de064387c?Expires=1649030400&Signature=W5BJqJbappVMmK6SatjOdqgMiMDSdCMPBZLLWY9vUzgQtwjd2owmkhqaSvVANM9zS-yl0lGWUHzMEOwoSyfS47Sfuls0NUdn9SMejkPkEQJDorZsrXIkQwhKl~7Rx~IypFEK5c5AfHoZal8f7-N~KirhUtgMV-XDOZos0aiE~16hCrDwKRT1TvSuUKekPwgCE1tdfMLPlHvfCijdvcngm211RUzt9~8jQdyplcNixKi3dDC1XCSynEruwptW2GNhDjENtgTzJmy03gUchMfFkJtuep3Bw2vIhgE8RncLha8wWhflRv~jPF6RbCtaJx-3m0xMfRfHTyDfLKE0BXl9Nw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    boldText: "Кубынина Екатерина",
    normalText: "Тренер категории “Профи”",
    categories: ["Теннис", "Большой теннис"],
  },
  {
    uri: "https://s3-alpha-sig.figma.com/img/cda6/56a6/e78c4d96af5aefc241f610f239a71596?Expires=1649030400&Signature=U-osJuGCCJXIgw3POPPE30cFlOv52ySt9~e9ISVOqZmp7wx2lpuhIFwzn~~wWAwtTPYoDV11Kiy-UA4TCFJ93CHOpDUTxuDrAhXfK0S-ch-yTdBxDMk0U5-BMcD0uPLWQKpPP25y9hx-EooAmqTclkPcszbXlKlJPN0j3f3TM~lHrc311uMw5avFdTUMGgIIYQhnRXSoSd1OL0jTfxPyeHUcaIwsTeoErlqiswCiF7TWEGv1-wnMZOtLp9WKW08EkeJvG-KjSwhnHnQo7RPFtrCMAO6ZjJHM9fXnRXL5X1SGIPGqllH6FnO5ghS1EYzGAPyRzJGs21N9Gvn4EhDKSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    boldText: "Иванов Александр",
    normalText: "Мастер спорта по легкой атлетике",
    categories: ["Теннис", "Настольный теннис", "Большой теннис"],
  },
  {
    uri: "https://s3-alpha-sig.figma.com/img/a8b1/883e/f7f7bf10859a801f1b3471be3d7ed5f1?Expires=1649030400&Signature=K2WKKkRXOC9FQV7HA2oI4p1eb5YgOSj-OXWhtj5yrkM49JruBojizCSlVOGXwURjs1zg8QckFNz7sQKSGBYsc9WqaB49T55JBs-tA5i6EYrg5KQg8MhxhrY3WUgxSdN5KiAwYC~yeCNWraY5P5wmoF8-WM8beiHIALywOVl4J4PwghNRFowzr~yMO87u6ypOwmWCxHUR-QX2Bp1ZdLtgAIRe-iPXtIeNe2zJlKyBNLDZYWmlbAoFBLXtCe-qqJ63WTWaCYA5YugI4gs7JhV5vrQ95oIwmQjdS922NAGYQBZjRWctjmOe11Jkz2XTMKourRTaFCAPpO4vTXSx0tb~UQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    boldText: "Скориков Иван",
    normalText: "Мастер спорта",
    categories: ["Теннис", "Настольный теннис"],
  },
];

const DoubleList = ({ selectedCategory }: { selectedCategory: string }) => {
  let DATA: JSX.Element[] = [];

  for (let i = 0; i < TrainerCards.length; i++) {
    if (
      selectedCategory === "Все" ||
      TrainerCards[i].categories.includes(selectedCategory)
    )
      DATA.push(
        <TrainerCard
          uri={TrainerCards[i].uri}
          boldText={TrainerCards[i].boldText}
          normalText={TrainerCards[i].normalText}
          key={TrainerCards[i].uri + TrainerCards[i].boldText}
        />
      );
  }

  //Пустые View в конце массива для того, чтобы часть карточек тренеров не скрывалась
  //полосой навигации
  DATA.push(<View key={"dummy1"} style={{ height: 50 }}></View>);
  DATA.push(<View key={"dummy2"} style={{ height: 50 }}></View>);

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        {DATA.map(function (item, index) {
          if (index % 2 === 0) {
            return item;
          }
        })}
      </View>
      <View style={styles.container}>
        {DATA.map(function (item, index) {
          if (index % 2 === 1) {
            return item;
          }
        })}
      </View>
    </View>
  );
};

export default DoubleList;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
