import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { ColumnType } from "../../api/types";
import { getColumnById } from "../../redux/selectors";

type RootStackParamList = {
  Prayers: { id: number };
}
type NavigationProp = StackNavigationProp<RootStackParamList>

export const DeskItem = ({ id }: { id: number }) => {
  const column = useSelector<RootStateType, ColumnType | undefined>(state => getColumnById(state, id));
  const navigation = useNavigation<NavigationProp>();

  return (
    <>
      {column
      && <TouchableOpacity style={styles.desk} onPress={() => navigation.navigate("Prayers", { id: column.id })}>
        <Text style={styles.deskTitle}>
          {column.title}
        </Text>
      </TouchableOpacity>}
    </>
  );
};

const styles = StyleSheet.create({
  desk: {
    marginTop: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 4,
    textAlign: "center"
  },
  deskTitle: {
    marginLeft: 15,
    marginVertical: 20,
    color: colors.primary,
    fontSize: 17
  }
});
