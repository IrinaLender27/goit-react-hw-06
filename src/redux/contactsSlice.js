// import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export const { addContacts, deleteContacts } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
