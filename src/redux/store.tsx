import {createStore} from "redux";
import robotReducer from "./reducers";

export const store:any = createStore(robotReducer);