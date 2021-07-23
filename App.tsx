import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Welcome } from "./src/screens/Welcome";
import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";
import { MyDesk } from "./src/screens/MyDesk";
import { NewColumn } from "./src/screens/NewColumn";
import { UpdateColumn } from "./src/screens/UpdateColumn";
import { Prayers } from "./src/screens/Prayers";
import { PrayerDetails } from "./src/screens/Prayer";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Welcome"} component={Welcome} />
        <Stack.Screen name={"SignIn"} component={SignIn} />
        <Stack.Screen name={"SignUp"} component={SignUp} />
        <Stack.Screen name={"MyDesk"} component={MyDesk} />
        <Stack.Screen name={"NewColumn"} component={NewColumn} />
        <Stack.Screen name={"UpdateColumn"} component={UpdateColumn} />
        <Stack.Screen name={"Prayers"} component={Prayers} />
        <Stack.Screen name={"Prayer"} component={PrayerDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProviderApp = () => {
  return <Provider store={store}><App /></Provider>;
};
export default ProviderApp;
