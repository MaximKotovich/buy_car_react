import { spawn } from 'redux-saga/effects'
import {sagaLoginWatcher} from "../pages/login/store/login.saga";
import {sagaHome} from "../pages/home/store/home.saga";

export default function * rootSaga () {
  yield spawn(sagaLoginWatcher)
  yield spawn(sagaHome)
}
