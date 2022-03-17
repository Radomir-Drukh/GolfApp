import React from "react";
const initialState: { setChosenDateDay: any; setChosenDateTime: any } = {
  setChosenDateDay: null,
  setChosenDateTime: null,
};
const DateTimeContext = React.createContext(initialState);
export const DateTimeProvider = DateTimeContext.Provider;
export default DateTimeContext;
