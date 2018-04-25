import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import {
    PAGE2_LESSEN, PAGE2_INCREMEN
} from "../actions/page2";



// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))



function* incremen(action) {
    yield delay(1000)
    yield put({type: PAGE2_INCREMEN, list: []});
}

function* lessen(action) {
    yield delay(1000)
    yield put({type: PAGE2_LESSEN, list: []});
}

export {
    incremen,

}
