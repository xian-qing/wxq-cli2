import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import {
    PAGE1_GETLIST,
} from "../actions/page1";
import {AxiosGetJSon,AxiosGetList} from '../../API/page1Service';



function* getData(action) {
    try {
        const posts = yield call(AxiosGetJSon, action) || []
        yield put({type: PAGE1_GETLIST, list: posts});
    } catch (e) {
        yield put({type: PAGE1_GETLIST, message: e.message});
    }
}

function* getXintiaoData(action) {
    const posts = yield call(AxiosGetList, action) || []
    console.log(posts)
    //yield put({type: PAGE1_GETLIST, list: posts});
}

function* removeData(action) {
    try {
        const list = [];
        yield put({type: PAGE1_GETLIST, removeId: action.data.id});
    } catch (e) {
        yield put({type: PAGE1_GETLIST, message: e.message});
    }
}


export {
    getData,
    removeData,
    getXintiaoData
}
