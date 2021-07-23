import { Dimensions } from "react-native";

type BlockType = {
  count: number
  text: string
}
export const blocks: Array<BlockType> = [
  { count: 123, text: "Total" },
  { count: 63, text: "by Me" },
  { count: 60, text: "by Others" }
];

export const width = Dimensions.get("window").width;
export const blockWidth = width / 2;
