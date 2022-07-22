import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {takeLatest, all, call, put} from 'redux-saga/effects'
import {fetchCategoriesSuccess, fetchCategoriesFailure} from './categories.actions';
import CATEGORIES_ACTIONS_TYPES from "./categories.types";

export function* fetchCategoriesAsync(){
	try{
		const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
		yield put(fetchCategoriesSuccess(categoriesArray));
	} catch(error){
		yield put(fetchCategoriesFailure(error))
	}
}



export function* onFetchCategories(){
	yield takeLatest(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync )
}

export function* categoriesSaga(){
	yield all([call(onFetchCategories)]);
}