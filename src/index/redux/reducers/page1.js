import cloneDeep from 'lodash/cloneDeep'
import {
    PAGE1_INIT,
    PAGE1_GETLIST,
    PAGE1_SAVEXINTIAODATA,
} from '../actions/page1';

const initState = {
    pageList: [],
    count: 0,
    pageData:{},
    xintiaoData:{}
};

export default function reducer(state = initState, action) {
    let count = state.count;
    let newState = cloneDeep(state)
    switch (action.type) {
        case PAGE1_GETLIST:
            if(action.removeId){
                newState.pageList.pop()
            }else {
                newState.pageList = action.list
            }
            return   {...newState}
        case PAGE1_INIT:
            state = initState;
            return {
                ...state
            };
        case PAGE1_SAVEXINTIAODATA:
            console.log(action)
            newState.xintiaoData = action.data
            return {
                ...newState
            };

        default:
            return state;
    }
}
