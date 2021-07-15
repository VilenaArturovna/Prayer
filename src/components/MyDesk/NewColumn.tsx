import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";
import { ButtonPrayer } from "../../../assets/ButtonPrayer";

export const NewColumn = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const createColumn = () => {
    dispatch({ type: types.CREATE_COLUMN_REQUESTED, payload: { title, description: desc } });
    navigation.navigate("MyDesk");
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
      <ButtonPrayer title={"Create column"} onPress={createColumn} />
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
  }
});
