import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { PrayerItem } from "./PrayerItem";
import { colors } from "../../../assets/Colors";
import { PrayerType } from "../../api/api";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";

type PropsType = {
  prayers: Array<PrayerType>
  columnId: number
}

export const MyPrayers = ({ prayers, columnId }: PropsType) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const addComment = () => {
    dispatch({
      type: types.CREATE_PRAYER_REQUESTED, payload: {
        title: newComment,
        description: "",
        checked: false,
        columnId
      }
    });
  };
  return (
    <View>
      <View style={styles.inputNewPrayer}>
        <View style={styles.inputContent}>
          <Pressable onPress={addComment}>
            <Image
              source={require("../../../assets/icons/plus.png")}
              style={styles.addIcon}
            />
          </Pressable>
          <TextInput
            style={styles.textInput}
            placeholder={"Add a prayer..."}
            placeholderTextColor={"#9C9C9C"}
            autoCompleteType={"off"}
            caretHidden={false}
            selectionColor={colors.blue}
            value={newComment}
            onChangeText={setNewComment}
          />
        </View>
      </View>
      <FlatList
        data={prayers}
        renderItem={(item) => (
          <PrayerItem
            title={item.item.title}
            id={item.item.id}
            checked={item.item.checked}
            usersCount={3}
            prayersCount={120}
          />
        )}
      />
      <TouchableHighlight onPress={() => {
      }}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Show Answered Prayers</Text>
        </View>
      </TouchableHighlight>
      <View style={{ marginBottom: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputNewPrayer: {
    marginHorizontal: 15,
    borderColor: colors.lightgray,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 16
  },
  inputContent: {
    marginVertical: 13,
    marginLeft: 14,
    flexDirection: "row"
  },
  addIcon: {
    width: 24,
    height: 24
  },
  textInput: {
    marginLeft: 14,
    fontSize: 17
  },
  button: {
    marginVertical: 21,
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
