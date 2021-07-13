import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

export const SignUp = () => {
  const dispatch = useDispatch()
  const [email, onChangeEmail] = useState<string>('')
  const [name, onChangeName] = useState<string>('')
  const [password, onChangePassword] = useState<string>('')
  return (
    <View style={styles.container}>
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
      <Button
        title={"Send"}
        onPress={() => dispatch({type: 'SIGN-UP', payload: {email, name, password}})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  field: {
    width: 200,
    height: 30,
    borderWidth: 1,
    margin: 5,
    padding: 3,
    borderRadius: 3,
  }
})
