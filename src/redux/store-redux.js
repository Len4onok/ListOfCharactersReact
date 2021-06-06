import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import charactersReducer from "./characters-reducer";

let reducers=combineReducers({
    charactersPage: charactersReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;

export default store;