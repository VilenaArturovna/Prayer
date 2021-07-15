import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput, TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import { colors } from "../../../assets/Colors";
import { Comment } from "./Comment";
import { PrayerHeader } from "./PrayerHeader";
import { Blocks } from "./Blocks";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types";
import { RequestStatusType } from "../../redux/reducers/auth-reducer";
import { RootStateType } from "../../redux/store";
import { CommentType, PrayerType } from "../../api/api";

type RootStackParamList = {
  Prayer: { id: number }
}

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Prayer">;

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,
  "Prayer">;

type PropsType = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export const PrayerDetails = ({ route, navigation }: PropsType) => {
  const id = route.params.id;
  const dispatch = useDispatch();
  const status = useSelector<RootStateType, RequestStatusType>(state => state.auth.status);
  const prayer = useSelector<RootStateType, PrayerType>(state => state.prayer);
  const comments = useSelector<RootStateType, Array<CommentType>>(state => state.comments.filter(comment => comment.prayerId === id));
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    dispatch({ type: types.FETCH_PRAYER, payload: { prayerId: id } });
    dispatch({ type: types.FETCH_COMMENTS });
  }, []);

  const addComment = () => {
    dispatch({ type: types.CREATE_COMMENT_REQUESTED, payload: { prayerId: prayer.id, body: newComment } });
    setNewComment("");
  };

  return (
    <>
      {status === "loading"
        ? <ActivityIndicator size="large" color={colors.blue} />
        : <>
          <SafeAreaView style={{ flex: 0, backgroundColor: colors.beige }} />
          <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <PrayerHeader title={prayer.title} />
            <ScrollView>
              <View style={styles.lastPrayed}>
                <Image
                  source={require("../../../assets/icons/state.png")}
                  style={{ tintColor: colors.vinous }}
                />
                <Text style={styles.textLastPrayed}>
                  Last prayed 8 min ago
                </Text>
              </View>
              <Blocks />
              <View>
                <Text style={styles.subtitle}>Members</Text>
                <View style={styles.avatarsBlock}>
                  <Image
                    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                    style={styles.avatar}
                  />
                  <Image
                    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                    style={styles.avatar}
                  />
                  <TouchableOpacity
                    style={styles.addMember}
                    onPress={() => {
                      return "add new member";
                    }}
                  >
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/icons/plus.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.subtitle}>Comments</Text>
                {comments.map(comment => <Comment
                  body={comment.body}
                  id={comment.id}
                  created={comment.created}
                  key={comment.id}
                />)}
                <View style={styles.addingComment}>
                  <TouchableHighlight onPress={addComment}>
                    <Image
                      source={require("../../../assets/icons/message-square.png")}
                      style={styles.iconAddComment}
                    />
                  </TouchableHighlight>
                  <TextInput
                    style={styles.textInput}
                    placeholder={"Add a comment..."}
                    placeholderTextColor={"#9C9C9C"}
                    autoCompleteType={"off"}
                    caretHidden={false}
                    selectionColor={colors.blue}
                    value={newComment}
                    onChangeText={setNewComment}
                  />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      }
    </>
  );
};

const styles = StyleSheet.create({
  lastPrayed: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
    paddingVertical: 14,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center"
  },
  textLastPrayed: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.primary,
    marginLeft: 10
  },

  subtitle: {
    color: colors.blue,
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 13,
    lineHeight: 15,
    textTransform: "uppercase"
  },
  avatarsBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
    marginBottom: 8
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 2
  },
  addMember: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.beige,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3
  },
  plusIcon: {
    tintColor: colors.white,
    width: 16,
    height: 16
  },

  addingComment: {
    paddingTop: 15,
    paddingLeft: 16,
    paddingBottom: 19,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colors.lightgray
  },
  iconAddComment: {
    width: 20,
    height: 20,
    tintColor: colors.beige
  },
  textInput: {
    marginLeft: 12,
    fontSize: 17,
    lineHeight: 20
  }
});
