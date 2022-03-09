import { combineReducers } from "redux";
import { UserState } from "../types/users";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

export interface AppState{

    user: UserState;
     categories: any;
    // records: any
}

const rootReducer = combineReducers<AppState>({

    user: userReducer,
    categories: categoryReducer
    // records: ()=>{}


})
export default rootReducer;