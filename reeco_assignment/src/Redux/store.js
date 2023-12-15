// redux/store.js
import { legacy_createStore } from "redux";
import { productReducer } from "./reducer";

export const store = legacy_createStore(productReducer);
