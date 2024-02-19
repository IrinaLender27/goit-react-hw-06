import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   persistStore,
// } from "redux-persist";
export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
  },
});
