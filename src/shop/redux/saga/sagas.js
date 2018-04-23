import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {PAGE1_GETLIST,PAGE1_GETDATA,PAGE1_REMOVEDATA} from "../actions/page1";
import {getData,removeData} from "./page1";

function* mySaga() {
    yield takeLatest(PAGE1_REMOVEDATA, removeData);
    yield takeLatest(PAGE1_GETDATA, getData);
}

export default mySaga;