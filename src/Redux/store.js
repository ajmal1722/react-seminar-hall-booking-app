import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectedSeatReducer from './seats/seatSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist configuration
const persistConfig = {
    key: 'root', // 'root' is the default key, you can use any key you want
    storage,
};

// Root reducer
const rootReducer = combineReducers({
    selectSeat: selectedSeatReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };