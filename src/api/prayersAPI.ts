import { store } from "../redux/store";
import { instance } from "./api";
import { CreatePrayerResponseType, DeleteResponseType, PrayerResponseType } from "./types";

export const prayersAPI = {
  createPrayer(
    title: string,
    description: string | null,
    checked: boolean,
    columnId: number
  ) {
    return instance.post<CreatePrayerResponseType>(`/columns/${columnId}/prayers`, {
      title,
      description,
      checked
    }, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  getPrayers() {
    return instance.get<Array<PrayerResponseType>>("/prayers", {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  getPrayerById(prayerId: number) {
    return instance.get<PrayerResponseType>(`/prayers/${prayerId}`, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  deletePrayer(prayerId: number) {
    return instance.delete<DeleteResponseType>(`/prayers/${prayerId}`, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  updatePrayer(title: string, checked: boolean, prayerId: number) {
    return instance.put<PrayerResponseType>(`/prayers/${prayerId}`, {
      title,
      checked
    }, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  }
};
