import { PrayerType } from "../../api/api";

const initialState: Array<PrayerType> = [];

export const prayersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
