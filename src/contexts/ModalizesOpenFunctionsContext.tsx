import React from "react";
const initialState: { dateTimePickerModalizeOpen: any } = {
  dateTimePickerModalizeOpen: null,
};
const ModalizesOpenFunctionsContext = React.createContext(initialState);
export const ModalizesOpenFunctionsProvider =
  ModalizesOpenFunctionsContext.Provider;
export default ModalizesOpenFunctionsContext;
