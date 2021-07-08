import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { MyPrayers } from "./MyPrayers";
import { MyPrayersHeader } from "./MyPrayersHeader";

type PropsType = {
  title: string
}
export type TabsType = "prayers" | "subscribed"

export const MyPrayersPage = ({title}: PropsType) => {
  const [activeTab, setActivaTab] = useState<TabsType>("prayers")
  return (
    <SafeAreaView>
      <MyPrayersHeader
        title={"To Do"}
        activeTab={activeTab}
        setActivaTab={setActivaTab}
      />
      <ScrollView>
        <MyPrayers />
      </ScrollView>
    </SafeAreaView>
  );
};

