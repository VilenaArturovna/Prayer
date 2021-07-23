import { types } from "../types";
import { PrayerType } from "../../api/types";
import { prayersActionsType } from "./actionCreators";

const initialState: Array<PrayerType> = [];

export const prayersReducer = (state = initialState, action: prayersActionsType) => {
  switch (action.type) {
    case types.SET_PRAYERS: {
      return action.prayers.map(prayer => ({ ...prayer }));
    }
    case types.CREATE_PRAYER: {
      return [...state, { ...action.prayer }];
    }
    case types.DELETE_PRAYER: {
      return state.filter(prayer => prayer.id !== action.id);
    }
    case types.UPDATE_PRAYER: {
      const copyState = state.map(prayer => ({ ...prayer }));
      const prayer = copyState.find(prayer => prayer.id === action.prayerId);
      if (prayer) {
        prayer.checked = action.checked;
        prayer.title = action.title;
      }
      return copyState;
    }
    default:
      return state;
  }
};
