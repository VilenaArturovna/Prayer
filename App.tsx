import React, { useEffect } from "react";
import { MyDesk } from "./src/components/MyDesk/MyDesk";
import { MyPrayersPage } from "./src/components/MyPrayersPage/MyPrayersPage";
import { PrayerDetails } from "./src/components/PrayerDetails/PrayerDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "./src/components/Authorization/SignIn";
import { SignUp } from "./src/components/Authorization/SignUp";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootStateType, store } from "./src/redux/store";
import { NewColumn } from "./src/components/MyDesk/NewColumn";
import { UpdateColumn } from "./src/components/MyDesk/UpdateColumn";
import { types } from "./src/redux/types";
import { ColumnType } from "./src/api/api";

const Stack = createStackNavigator();

const App = () => {
  /*const columns = useSelector<RootStateType, Array<ColumnType>>(state => state.columns);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('reloaded!!');
    dispatch({ type: types.FETCH_COLUMNS });
  }, [columns]);*/

  return (
      <NavigationContainer>
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
        <Stack.Screen name={"NewColumn"} component={NewColumn} />
        <Stack.Screen name={"UpdateColumn"} component={UpdateColumn} />
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
    </NavigationContainer>
  );
};

const ProviderApp = () => {
  return <Provider store={store}><App /></Provider>
}
export default ProviderApp;
