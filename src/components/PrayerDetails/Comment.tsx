import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../assets/Colors";
import Swipeout from "react-native-swipeout";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";
import { dateCalc } from "../../utils/utils";

type PropsType = {
  body: string
  created: string
  id: number
}

export const Comment = ({ body, created, id }: PropsType) => {
  const date = dateCalc(created);
  const swipeBtn = [{
    text: "Delete",
    backgroundColor: colors.vinous,
    onPress: () => deleteComment()
  }];
  const dispatch = useDispatch();
  const deleteComment = () => {
    dispatch({ type: types.DELETE_COMMENT_REQUESTED, payload: { commentId: id } });
  };
  //имя комментатора пришлось захардкордить, т.к. с сервера не приходит информация об имени
  return (
    <Swipeout right={swipeBtn} backgroundColor={colors.white} autoClose>
      <View style={styles.commentItem}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={styles.userName}>Anna Barber</Text>
            <Text style={styles.addingDate}>{date}</Text>
          </View>
          <Text style={styles.commentText}>{body}</Text>
        </View>
      </View>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  commentItem: {
    borderTopColor: colors.lightgray,
    borderTopWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: "row"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 3,
    marginRight: 9
  },
  userName: {
    color: colors.primary,
    fontSize: 17,
    lineHeight: 20,
    marginRight: 6,
    fontWeight: "600"
  },
  addingDate: {
    color: colors.gray,
    fontSize: 13,
    lineHeight: 15
  },
  commentText: {
    color: colors.primary,
    fontSize: 17,
    lineHeight: 20,
    marginTop: 2
  }
});
