import {call, put, takeEvery } from "redux-saga/effects";
import {GET_ALL_PETS_REQUEST, SET_ALL_PETS} from "./home.action";


function * getAllPetsRequest ({ payload }: ReturnType<any>) {
    yield put({ type: SET_ALL_PETS, payload: true })
}


export function * sagaHome () {
    yield takeEvery(GET_ALL_PETS_REQUEST, getAllPetsRequest)
}
