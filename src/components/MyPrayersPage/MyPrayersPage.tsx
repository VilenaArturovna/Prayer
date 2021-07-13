import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { MyPrayers } from "./MyPrayers";
import { MyPrayersHeader } from "./MyPrayersHeader";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../../../assets/Colors";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { ColumnType } from "../../api/api";

type RootStackParamList = {
  Prayers: { id: number };
};
type PrayersRouteProp = RouteProp<RootStackParamList, "Prayers">;
type PropsType = {
  route: PrayersRouteProp;
};


export const MyPrayersPage = ({ route }: PropsType) => {
  const id = route.params.id;
  const columns = useSelector<RootStateType, Array<ColumnType>>(state => state.columns)
  const column = columns.find(column => column.id === id)

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <MyPrayersHeader
        id={id}
      />
      <ScrollView style={{backgroundColor: colors.white, minHeight: "100%"}}>
        <MyPrayers />
      </ScrollView>
    </SafeAreaView>
  );
};

