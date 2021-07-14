import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { ColumnType } from "../../api/api";

type RootStackParamList = {
  Prayers: { id: number };
}
type NavigationProp = StackNavigationProp<RootStackParamList>

export const DeskItem = ({ id }: { id: number }) => {
  const columns = useSelector<RootStateType, Array<ColumnType>>(state => state.columns);
  const column = columns.find(column => column.id === id);
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity style={styles.desk} onPress={() => navigation.navigate("Prayers", { id: column.id })}>
      <Text style={styles.deskTitle}>
        {column.title}
      </Text>
    </TouchableOpacity>
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
