import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import JobsNavigator from "./navigation/JobsNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <JobsNavigator />
    </NavigationContainer>
  );
}