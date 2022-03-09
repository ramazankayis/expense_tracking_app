import { Category } from './../types/category';
import api from "../../utils/api";
import {  CategoryDispatch } from "../types/category";

export const getCategories=()=>async (dispatch: CategoryDispatch) => {
    dispatch({type: "GET_CATEGORIES_START"});
    try {
        const response = await api.get<Category[]>("/categoris");
        dispatch({type:"GET_CATEGORIES_SUCCESS",payload: response.data});
        
    } catch (error) {

        dispatch({type:"GET_CATEGORIES_ERROR"});
        console.log("hatalı");
        
    }
    
}