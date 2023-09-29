import { combineReducers } from "redux";
import { operationsReducer } from "./reducers/operation";



export const rootReducer = combineReducers({
    operationsReducer,
})