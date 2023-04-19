import { enableScreens } from "react-native-screens";

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import { NavigationContainer } from "@react-navigation/native";
import JobsNavigator from "./navigation/JobsNavigator";

import authReducer from "./store/reducers/auth";
import jobsReducer from "./store/reducers/ads";

enableScreens();

const rootReducer = combineReducers({
  auth: authReducer,
  jobs: jobsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <JobsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
