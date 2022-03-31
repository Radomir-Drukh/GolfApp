import React from "react";
const initialState: {
  price: string;
  openDateModalize: () => void;
  verifiedDate: string;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  openResultModalize: () => void;
  openInfoModalize: () => void;
  userNumber: string;
  setUserNumber: React.Dispatch<React.SetStateAction<string>>;
  modalizeType: string;
} = {
  price: "0",
  openDateModalize: () => {},
  verifiedDate: "Выберите время визита",
  amount: 1,
  setAmount: () => {},
  openResultModalize: () => {},
  openInfoModalize: () => {},
  userNumber: "",
  setUserNumber: () => {},
  modalizeType: "",
};
const SignUpContext = React.createContext(initialState);
export const SignUpProvider = SignUpContext.Provider;
export default SignUpContext;
