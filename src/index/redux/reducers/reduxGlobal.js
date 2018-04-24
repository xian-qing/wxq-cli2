import {
    GLOBAL_INIT,
    GLABAL_SAVEUSERINFO
} from '../actions/global';

const initState = {
    userInfo:{}
};

export default function reducer(state = initState, action) {
    let count = state.count;
    switch (action.type) {
        case GLABAL_SAVEUSERINFO:
          state.userInfo = action.data
            return {
                ...state
            }
        case GLOBAL_INIT:
            state = initState;
            return {
                ...state
            };

        default:
            return state;
    }
}
