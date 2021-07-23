import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../assets/Colors";
import { blocks, blockWidth } from "../../utils/constants";

export const Blocks = () => {
  return (
    <View style={styles.blocks}>
      <View style={styles.dateBlock}>
        <View style={styles.dateBlockBlock}>
          <Text style={styles.date}>July 25 2017</Text>
          <Text style={styles.dateText}>Date Added</Text>
          <Text style={[styles.dateText, styles.dateTextBlue]}>
            Opened for 4 days
          </Text>
        </View>
      </View>
      {blocks.map((b, i) => {
        return (
          <View
            style={[styles.block, i % 2 !== 0 && { borderRightWidth: 1 }]}
            key={i}
          >
            <View style={styles.blockBlock}>
              <Text style={styles.count}>{b.count}</Text>
              <Text style={styles.dateText}>{`Times Prayed ${b.text}`}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  blocks: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  dateBlock: {
    width: blockWidth,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lightgray,
    height: 108
  },
  dateBlockBlock: {
    paddingLeft: 15,
    paddingTop: 32
  },
  date: {
    color: colors.beige,
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 6
  },
  dateText: {
    fontSize: 13,
    lineHeight: 15,
    color: colors.primary
  },
  dateTextBlue: {
    color: colors.blue
  },
  block: {
    width: blockWidth,
    borderBottomWidth: 1,
    borderColor: colors.lightgray,
    height: 108
  },
  blockBlock: {
    paddingLeft: 15,
    paddingTop: 26
  },
  count: {
    color: colors.beige,
    fontSize: 32,
    lineHeight: 37
  }
});
