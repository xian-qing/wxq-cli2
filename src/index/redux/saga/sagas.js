import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {PAGE1_GETLIST,PAGE1_GETDATA,PAGE1_REMOVEDATA,PAGE1_GETXINTIAODATA} from "../actions/page1";
import {
    PAGE2_INCREMENT_ASYNC,
} from "../actions/page2";
import {getData,removeData,getXintiaoData} from "./page1";
import {incremen} from "./page2";

function* mySaga() {
    yield takeLatest(PAGE1_REMOVEDATA, removeData);
    yield takeLatest(PAGE1_GETDATA, getData);
    yield takeLatest(PAGE1_GETXINTIAODATA, getXintiaoData);
    yield takeEvery(PAGE2_INCREMENT_ASYNC, incremen);
}

export default mySaga;