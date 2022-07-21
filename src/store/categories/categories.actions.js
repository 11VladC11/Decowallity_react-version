import CATEGORIES_ACTIONS_TYPES from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategorieStart =()=> 
	createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START)

export const fetchCategorieSuccess =(categoriesArray)=>
	createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategorieFailure =(error)=> 
	createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE, error)


export const fetchCategoriesAsync =()=> async (dispatch)=>{
	dispatch(fetchCategorieStart());
	try{
		const categoriesArray = await getCategoriesAndDocuments('categories');
		dispatch(fetchCategorieSuccess(categoriesArray));
	}catch(error){
		dispatch(fetchCategorieFailure(error))
	}
	 
}