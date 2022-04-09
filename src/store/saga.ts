import { spawn } from 'redux-saga/effects'
import {sagaLoginWatcher} from "../pages/login-page/store/login.saga";

export default function * rootSaga () {
  yield spawn(sagaLoginWatcher)
}
