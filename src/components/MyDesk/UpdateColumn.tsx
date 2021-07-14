import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { colors } from "../../../assets/Colors";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { ColumnType } from "../../api/api";
import { types } from "../../redux/types";

type RootStackParamList = {
  UpdateColumn: { column: ColumnType }
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "UpdateColumn">;

type PropsType = {
  route: ProfileScreenRouteProp;
};

export const UpdateColumn = ({ route }: PropsType) => {
  const column = route.params.column;
  const [title, setTitle] = useState<string>(column.title);
  const [desc, setDesc] = useState<string>(column.description);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const updateColumn = () => {

    dispatch({
      type: types.UPDATE_COLUMN_REQUESTED,
      payload: { columnId: column.id, title, description: desc }
    });
    navigation.navigate("Prayers", { id: column.id });
  };
  const deleteColumn = () => {
    navigation.navigate("MyDesk");
    dispatch({
      type: types.DELETE_COLUMN_REQUESTED, payload: { columnId: column.id }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.field}
        placeholder={"Enter column title"}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.field}
        placeholder={"Enter column description"}
        value={desc}
        onChangeText={setDesc}
      />
      <View style={styles.btnGroup}><TouchableHighlight onPress={updateColumn}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Update column</Text>
        </View>
      </TouchableHighlight>
        <TouchableHighlight onPress={deleteColumn}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Delete column</Text>
          </View>
        </TouchableHighlight></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center",
    height: "100%",
    backgroundColor: colors.white
  },
  field: {
    width: "80%",
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightgray,
    marginTop: 10,
    padding: 5
  },
  btnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  button: {
    marginVertical: 21,
    marginHorizontal: 5,
    backgroundColor: colors.beige,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonTitle: {
    textTransform: "uppercase",
    color: colors.white,
    textAlign: "center",
    marginHorizontal: 17,
    fontSize: 12,
    lineHeight: 14
  }
});
