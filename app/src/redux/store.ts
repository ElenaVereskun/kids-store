import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./features/productsSlice";
import newsPageSlice from "./features/newsPageSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import setAboutUsSlice from "./features/admin/aboutUsSetSlice";
import setContactsSlice from "./features/admin/сontactsSetSlice";
import adminPartnerSlice from "./features/admin/adminPartnerSlice";

export const store = configureStore({
  reducer: {
    setContactsSlice,
    newsSlice,
    newsPageSlice,
    setAboutUsSlice,
    adminPartnerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
