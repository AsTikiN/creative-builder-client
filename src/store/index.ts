import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import { useDispatch, useSelector, useStore } from "react-redux";
import storage from "redux-persist/lib/storage";
import { cacheResetMiddleware } from "./middleware/cacheResetMiddleware";
import { authSlice } from "./features/auth";
import { themeSlice } from "./features/theme";
import { api } from "./api";

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistConfig: PersistConfig<RootState> = {
  key: "root",
  whitelist: [authSlice.name, themeSlice.name],
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware, cacheResetMiddleware.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
