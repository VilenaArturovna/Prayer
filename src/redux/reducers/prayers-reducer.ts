import { ColumnType, PrayerResponseType, PrayerType } from "../../api/api";
import { types } from "../types";

const initialState: Array<PrayerType> = [];
type ActionsType =
  ReturnType<typeof setPrayers> |
  ReturnType<typeof createPrayer> |
  ReturnType<typeof updatePrayer> |
  ReturnType<typeof deletePrayer>

export const prayersReducer = (state = initialState, action: ActionsType) => {
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

export const setPrayers = (prayers: Array<PrayerResponseType>) => ({
  type: types.SET_PRAYERS,
  prayers
} as const);
export const createPrayer = (prayer: PrayerType) => ({
  type: types.CREATE_PRAYER,
  prayer
} as const);
export const deletePrayer = (id: number) => ({
  type: types.DELETE_PRAYER,
  id
} as const);
export const updatePrayer = (title: string, checked: boolean, prayerId: number) => ({
  type: types.UPDATE_PRAYER,
  title,
  checked,
  prayerId
} as const);
