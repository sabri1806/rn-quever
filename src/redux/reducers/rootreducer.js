import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import appReducer from "./app.reducer";

const allReducers = combineReducers({ appReducer, movieReducer });

export const rootReducer = allReducers;
