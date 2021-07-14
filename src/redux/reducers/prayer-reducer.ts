import { PrayerType } from "../../api/api";
import { types } from "../types";

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

export const getPrayerById = (prayer: PrayerType) => ({
  type: types.GET_PRAYER,
  prayer
} as const);
