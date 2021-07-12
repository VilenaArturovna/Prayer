import React from "react";
import { MyDesk } from "./components/MyDesk";
import { MyPrayersPage } from "./components/MyPrayersPage/MyPrayersPage";
import { PrayerDetails } from "./components/PrayerDetails/PrayerDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "./components/Authorization/SignIn";
import { SignUp } from "./components/Authorization/SignUp";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}><NavigationContainer>
      <Stack.Navigator>{/*
        <Stack.Screen name={"SignIn"} component={SignIn} />
        <Stack.Screen name={"SignUp"} component={SignUp} />*/}
        <Stack.Screen
          name={"MyDesk"}
          component={MyDesk}
          options={
            {
              headerStyle: { height: 0 },
              headerLeft: () => null
            }
          }
        />
        <Stack.Screen
          name={"Prayers"}
          component={MyPrayersPage}
          options={
            {
              headerStyle: { height: 0 },
              headerLeft: () => null
            }
          }
        />
        <Stack.Screen
          name={"Prayer"}
          component={PrayerDetails}
          options={
            {
              headerStyle: { height: 0 },
              headerLeft: () => null
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer></Provider>
  );
};

export default App;
