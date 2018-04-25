import cloneDeep from 'lodash/cloneDeep'
import {
    PAGE2_INCREMEN,
    PAGE2_INCREMENT_ASYNC, PAGE2_LESSEN,
} from '../actions/page2';

const initState = {
    count: 0,
};

export default function reducer(state = initState, action) {
    let count = state.count;
    let newState = cloneDeep(state)
    switch (action.type) {
        case PAGE2_INCREMEN:
            newState.count++
            return {
                ...newState
            }
        case PAGE2_LESSEN:
            newState.count--
            return {
                ...newState
            }
        default:
            return state;
    }
}
