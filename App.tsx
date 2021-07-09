import React from "react";
import { MyDesk } from "./components/MyDesk";
import { MyPrayersPage } from "./components/MyPrayersPage/MyPrayersPage";
import { PrayerDetails } from "./components/PrayerDetails/PrayerDetails";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { colors } from "./assets/Colors";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"MyDesk"} component={MyDesk} />
        <Stack.Screen
          name={"Prayers"}
          component={MyPrayersPage}
          options={
            ({route}) => ({title: route.params.title})
          }
        />
        <Stack.Screen
          name={"Prayer"}
          component={PrayerDetails}
          options={
            {
            headerStyle: {backgroundColor: colors.beige, height: 0},
              headerLeft: ()=> null
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
