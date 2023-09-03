import {combineReducers, configureStore} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartSlice"

const reducers = combineReducers({
    cart: cartReducer
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)
