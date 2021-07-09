import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { MyPrayers } from "./MyPrayers";
import { MyPrayersHeader } from "./MyPrayersHeader";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Prayers: { title: string };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Prayers">;

type PropsType = {
  route: ProfileScreenRouteProp;
};

export type TabsType = "prayers" | "subscribed"

export const MyPrayersPage = ({ route }: PropsType) => {
  const title = route.params.title;

  const [activeTab, setActivaTab] = useState<TabsType>("prayers");
  return (
    <SafeAreaView>
      <MyPrayersHeader
        title={title}
        activeTab={activeTab}
        setActivaTab={setActivaTab}
      />
      <ScrollView>
        <MyPrayers />
      </ScrollView>
    </SafeAreaView>
  );
};

