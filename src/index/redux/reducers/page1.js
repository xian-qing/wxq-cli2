import cloneDeep from 'lodash/cloneDeep'
import {
    PAGE1_INIT,
    PAGE1_GETLIST,
} from '../actions/page1';

const initState = {
    pageList: [],
    count: 0,
    pageData:{}
};

export default function reducer(state = initState, action) {
    let count = state.count;
    switch (action.type) {
        case PAGE1_GETLIST:
            let newState = cloneDeep(state)
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

        default:
            return state;
    }
}
