import * as React from "react";
import { enableScreens } from "react-native-screens";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
// } from "redux";
// import { Provider } from "react-redux";
// import ReduxThunk from "redux-thunk";

import { NavigationContainer } from "@react-navigation/native";
import JobsNavigator from "./navigation/JobsNavigator";

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <JobsNavigator />
    </NavigationContainer>
  );
}
