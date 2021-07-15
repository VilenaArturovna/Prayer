import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../assets/Colors";
import Swipeout from "react-native-swipeout";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";

type PropsType = {
  body: string
  created: string
  id: number
}

const dateCalc = (created: string) => {
  const elapsed = (new Date().getTime() - new Date(created).getTime()) / 1000;
  if (elapsed < 60) {
    return `${Math.round(elapsed)} seconds ago`;
  } else if (elapsed < 3600) {
    return `${Math.round(elapsed / 60)} minutes ago`;
  } else if ((elapsed / 3600 < 24)) {
    return `${Math.round(elapsed / 3600)} hours ago`;
  } else {
    return `${Math.round(elapsed / 3600 / 24)} days ago`;
  }
};

export const Comment = ({ body, created, id }: PropsType) => {
  const data = dateCalc(created);
  const swipeBtn = [{
    text: "Delete",
    backgroundColor: colors.vinous,
    onPress: () => deleteComment()
  }];
  const dispatch = useDispatch();
  const deleteComment = () => {
    dispatch({ type: types.DELETE_COMMENT_REQUESTED, payload: { commentId: id } });
  };
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
            <Text style={styles.addingDate}>{data}</Text>
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
