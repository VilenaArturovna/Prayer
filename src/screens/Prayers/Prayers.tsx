import React, { useEffect } from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { MyPrayers, MyPrayersHeader } from "../../components/Prayers";
import { RouteProp } from "@react-navigation/native";
import { colors } from "../../../assets/Colors";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { types } from "../../redux/types";
import { ColumnType, PrayerType, RequestStatusType } from "../../api/types";
import { getAppStatus, getColumn, getPrayersForColumn } from "../../redux/selectors";

type RootStackParamList = {
  Prayers: { id: number };
};
type PrayersRouteProp = RouteProp<RootStackParamList, "Prayers">;
type PropsType = {
  route: PrayersRouteProp;
};

export const Prayers = ({ route }: PropsType) => {
  const id = route.params.id;
  const status = useSelector<RootStateType, RequestStatusType>(getAppStatus);
  const column = useSelector<RootStateType, ColumnType>(getColumn);
  const prayers = useSelector<RootStateType, Array<PrayerType>>(state => getPrayersForColumn(state, id));

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
            <MyPrayers prayers={prayers} columnId={id} />
          </View>
        </>
      }
    </SafeAreaView>
  );
};

