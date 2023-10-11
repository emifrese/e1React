import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartSlice";
import menuReducer from "./menu/menuSlice";
import pokemonReducer from "./pokemon/pokemonSlice"

const reducers = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
  pokemon: pokemonReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
})
});

export const persistor = persistStore(store);
