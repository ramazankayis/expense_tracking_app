import { combineReducers } from "redux";
import { UserState } from "../types/users";
import userReducer from "./userReducer";

export interface AppState{

    user: UserState;
    // categories: any;
    // records: any
}

const rootReducer = combineReducers<AppState>({

    user: userReducer
    // categories: ()=> {},
    // records: ()=>{}


})
export default rootReducer;