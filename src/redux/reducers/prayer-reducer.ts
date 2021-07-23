import { types } from "../types";
import { PrayerType } from "../../api/types";
import { getPrayerById } from "./actionCreators";

const initialState: PrayerType = {
  title: "Hey",
  description: "",
  checked: false,
  id: 1,
  columnId: 1
};

export const prayerReducer = (state = initialState, action: ReturnType<typeof getPrayerById>) => {
  switch (action.type) {
    case types.GET_PRAYER: {
      return { ...action.prayer };
    }
    default:
      return state;
  }
};
