import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types";
import { useNavigation } from "@react-navigation/native";
import { RootStateType } from "../../redux/store";
import { colors } from "../../../assets/Colors";
import { ButtonPrayer } from "../../../assets/ButtonPrayer";
import { RequestStatusType } from "../../api/types";
import { getAppStatus, getIsLoggedInStatus } from "../../redux/selectors";

export const SignUp = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState<string>("");
  const [name, onChangeName] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");
  const navigation = useNavigation();
  const isLoggedIn = useSelector<RootStateType, boolean>(getIsLoggedInStatus);
  const status = useSelector<RootStateType, RequestStatusType>(getAppStatus);

  const signUp = () => {
    dispatch({ type: types.SIGN_UP_REQUESTED, payload: { email: email.toLowerCase(), password, name } });
    onChangeEmail("");
    onChangePassword("");
    onChangeName("");
    isLoggedIn && navigation.navigate("MyDesk");
  };
  return (
    <View style={styles.container}>
      {status === "loading" && <ActivityIndicator size="large" color={colors.blue} />}
      <TextInput
        value={name}
        onChangeText={onChangeName}
        placeholder={"Enter your name"}
        style={styles.field}
      />
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        placeholder={"Email"}
        style={styles.field}
      />
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        style={styles.field}
        placeholder={"Password"}
      />
      <ButtonPrayer title={"Send"} onPress={signUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white
  },
  field: {
    width: 200,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    marginTop: 10,
    padding: 5
  }
});
