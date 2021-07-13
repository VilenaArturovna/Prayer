import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import { PrayerItem } from "./PrayerItem";
import { colors } from "../../../assets/Colors";

export const MyPrayers = () => {
  return (
    <ScrollView>
      <View style={styles.inputNewPrayer}>
        <View style={styles.inputContent}>
          <Pressable>
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
          />
        </View>
      </View>
      <PrayerItem
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        usersCount={3}
        prayersCount={120}
      />
      <PrayerItem
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        usersCount={0}
        prayersCount={120}
      />
      <TouchableHighlight onPress={()=>{}}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Show Answered Prayers</Text>
        </View>
      </TouchableHighlight>
      <View style={{marginBottom: 100}} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputNewPrayer: {
    marginHorizontal: 15,
    borderColor: colors.lightgray,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 16,
  },
  inputContent: {
    marginVertical: 13,
    marginLeft: 14,
    flexDirection: "row",
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  textInput: {
    marginLeft: 14,
    fontSize: 17,
  },
  button: {
    marginVertical: 21,
    backgroundColor: colors.beige,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: 'center',

  },
  buttonTitle: {
    textTransform: "uppercase",
    color: colors.white,
    textAlign: "center",
    marginHorizontal: 17,
    fontSize: 12,
    lineHeight: 14,
  },
})
