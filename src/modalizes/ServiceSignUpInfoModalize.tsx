import React, { useContext } from "react";
import { Modalize } from "react-native-modalize";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import DateTimePickerScreen from "../screens/DateTimePickerScreen";
import SelectButton from "../components/screenComponents/DateTimePickerScreen/SelectButton";
import ServiceSignUpScreen from "../screens/SignUpScreen";
import CloseButton from "../components/baseComponents/CloseButton";
import SignUpButton from "../components/screenComponents/SignUpScreen/SignUpButton";
import SignUpContext from "../contexts/SignUpContext";
import SignUpInfoScreen from "../screens/SignUpInfoScreen";
import { useNavigation } from "@react-navigation/native";

const SignUpInfoModalize = ({
  modalizeRef,
  onClose,
}: {
  modalizeRef;
  onClose: () => void;
}) => {
  const signUpContext = useContext(SignUpContext);

  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <Modalize
      ref={modalizeRef}
      modalStyle={styles.container}
      disableScrollIfPossible={false}
      withHandle={false}
      velocity={10}
      threshold={10}
      HeaderComponent={<CloseButton onClose={onClose} />}
      FooterComponent={
        <SignUpButton
          text={"Понятно"}
          price="2000"
          amount={signUpContext.amount}
          onBook={() => navigate("Клуб")}
        />
      }
    >
      <SignUpInfoScreen />
    </Modalize>
  );
};

export default SignUpInfoModalize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});