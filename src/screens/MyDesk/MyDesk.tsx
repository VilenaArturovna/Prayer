import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Button, Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { colors } from "../../../assets/Colors";
import { DeskItem } from "../../components/MyDesk";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types";
import { RootStateType } from "../../redux/store";
import { useNavigation } from "@react-navigation/native";
import { ColumnType, RequestStatusType } from "../../api/types";
import { getAppStatus, getColumns } from "../../redux/selectors";

const width = Dimensions.get("window").width

export const MyDesk = () => {
  const columns = useSelector<RootStateType, Array<ColumnType>>(getColumns);
  const appStatus = useSelector<RootStateType, RequestStatusType>(getAppStatus);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: types.FETCH_COLUMNS });
  }, []);

  const logOut = () => {
    dispatch({type: types.LOG_OUT_REQUESTED})
    navigation.navigate('SignIn')
  }
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, minHeight: "100%" }}>
      {appStatus === "loading"
        ? <ActivityIndicator size="large" color={colors.blue} />
        : <>
          <View style={styles.header}>
            <Button title={'LOG OUT'} onPress={logOut} color={colors.primary} />
              <Text style={styles.title}>My Desk</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("NewColumn")}
              >
                <Image
                  style={styles.iconImage}
                  source={require("../../../assets/icons/plus.png")}
                />
              </TouchableOpacity>
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
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15
  },
  title: {
    color: colors.primary,
    fontSize: 17,
    position: "absolute",
    width: 100,
    left: width/2 - 50
  },

  iconImage: {
    width: 16,
    height: 16
  }
});
