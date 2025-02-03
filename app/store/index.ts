import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    users: userReducer
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default store;