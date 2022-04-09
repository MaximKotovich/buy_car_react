import {call, put, takeEvery } from "redux-saga/effects";
import {GET_TOKEN, REQUEST_AUTH, SET_LOADING} from "./login.action";
import {AuthApi} from "../api/login.api";
import Cookies from "universal-cookie";


function * loginRequest ({ payload }: ReturnType<any>) {
    yield put({ type: SET_LOADING, payload: true })
    try {
        yield call(AuthApi, payload)
        const cookies = new Cookies()
        if (cookies.get('jwt')) {
            yield put({ type: GET_TOKEN, payload: cookies.get('jwt') })
        }
    } catch (error: any) {
            console.log(error)
        }

    yield put({ type: SET_LOADING, payload: false })
}


export function * sagaLoginWatcher () {
    yield takeEvery(REQUEST_AUTH, loginRequest)
}
