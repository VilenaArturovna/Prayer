import React, { useEffect } from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { MyPrayers } from "./MyPrayers";
import { MyPrayersHeader } from "./MyPrayersHeader";
import { RouteProp } from "@react-navigation/native";
import { colors } from "../../../assets/Colors";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { ColumnType, PrayerType } from "../../api/api";
import { types } from "../../redux/types";
import { RequestStatusType } from "../../redux/reducers/auth-reducer";

type RootStackParamList = {
  Prayers: { id: number };
};
type PrayersRouteProp = RouteProp<RootStackParamList, "Prayers">;
type PropsType = {
  route: PrayersRouteProp;
};

export const MyPrayersPage = ({ route }: PropsType) => {
  const id = route.params.id;
  const status = useSelector<RootStateType, RequestStatusType>(state => state.auth.status);
  const column = useSelector<RootStateType, ColumnType>(state => state.column);
  const prayers = useSelector<RootStateType, Array<PrayerType>>(state => state.prayers.filter(prayer => prayer.columnId === id))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: types.FETCH_COLUMN, payload: { columnId: id } });
    dispatch({ type: types.FETCH_PRAYERS });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white }}>
      {status === "loading"
        ? <ActivityIndicator size="large" color={colors.blue} />
        : <>
          <MyPrayersHeader
            column={column}
          />
          <View style={{ backgroundColor: colors.white, minHeight: "100%" }}>
            <MyPrayers prayers={prayers} columnId={id}/>
          </View>
        </>
      }
    </SafeAreaView>
  );
};

