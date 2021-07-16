import React from "react";
import { MyDesk } from "./src/components/MyDesk/MyDesk";
import { MyPrayersPage } from "./src/components/MyPrayersPage/MyPrayersPage";
import { PrayerDetails } from "./src/components/PrayerDetails/PrayerDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "./src/components/Authorization/SignIn";
import { SignUp } from "./src/components/Authorization/SignUp";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NewColumn } from "./src/components/MyDesk/NewColumn";
import { UpdateColumn } from "./src/components/MyDesk/UpdateColumn";
import { Welcome } from "./src/components/Welcome";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={"Welcome"}
          component={Welcome}
        />
        <Stack.Screen
          name={"SignIn"}
          component={SignIn}
        />
        <Stack.Screen name={"SignUp"} component={SignUp} />
        <Stack.Screen
          name={"MyDesk"}
          component={MyDesk}
        />
        <Stack.Screen name={"NewColumn"} component={NewColumn} />
        <Stack.Screen name={"UpdateColumn"} component={UpdateColumn} />
        <Stack.Screen
          name={"Prayers"}
          component={MyPrayersPage}

        />
        <Stack.Screen
          name={"Prayer"}
          component={PrayerDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProviderApp = () => {
  return <Provider store={store}><App /></Provider>;
};
export default ProviderApp;
