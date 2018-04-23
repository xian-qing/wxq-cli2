import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import {
    PAGE1_GETLIST, PAGE1_SAVEXINTIAODATA
} from "../actions/page1";
import {AxiosGetJSon,AxiosGetList} from '../../API/page1Service';



function* getData(action) {
    const posts = yield call(AxiosGetJSon, action) || []
    yield put({type: PAGE1_GETLIST, list: posts});
}

function* getXintiaoData(action) {
    const posts = yield call(AxiosGetList, action) || []
    let data = posts.data
    console.log(data)
    yield put({type: PAGE1_SAVEXINTIAODATA, data: data});
}

function* removeData(action) {
    try {
        const list = [];
        yield put({type: PAGE1_GETLIST, name: action.data.name});
    } catch (e) {
        yield put({type: PAGE1_GETLIST, message: e.message});
    }
}


export {
    getData,
    removeData,
    getXintiaoData
}
