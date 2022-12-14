import {createStore, applyMiddleware, combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit"
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import UserReducer from "./UserReducer";
import CartReducer from "./CartReducer";

const middleware = [thunk];

const AppReducer = combineReducers({
	user: UserReducer,
	cart: CartReducer,
})
const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(...middleware)));
// const store = configureStore({
// 	reducer:{
// 		user: UserReducer,
// 		cart: CartReducer,
// 	}
// })
export default store;
