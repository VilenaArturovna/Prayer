import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { colors } from "../../../assets/Colors";
import { DeskItem } from "./DeskItem";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types";
import { RootStateType } from "../../redux/store";
import { ColumnType } from "../../api/api";
import { useNavigation } from "@react-navigation/native";
import { RequestStatusType } from "../../redux/reducers/auth-reducer";

export const MyDesk = () => {
  const columns = useSelector<RootStateType, Array<ColumnType>>(state => state.columns);
  const appStatus = useSelector<RootStateType, RequestStatusType>(state => state.auth.status);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('reloaded!!!!');
    dispatch({ type: types.FETCH_COLUMNS });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, minHeight: "100%" }}>
      {appStatus === "loading"
        ? <ActivityIndicator size="large" color={colors.blue} />
        : <>
          <View style={styles.header}>
            <View style={styles.container}>
              <Text style={styles.title}>My Desk</Text>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => navigation.navigate("NewColumn")}
              >
                <Image
                  style={styles.iconImage}
                  source={require("../../../assets/icons/plus.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList style={{paddingTop: 5}}
            data={columns}
            renderItem={(item) => <DeskItem id={item.item.id}/>}
            keyExtractor={item => item.id.toString()}
          />
        </>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
    textAlign: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.primary,
    textAlign: "center",
    fontSize: 17,
    width: 137
  },
  container: {
    justifyContent: "center",
    flexDirection: "row"
  },
  icon: {
    position: "absolute",
    right: 15
  },
  iconImage: {
    width: 16,
    height: 16
  }
});
