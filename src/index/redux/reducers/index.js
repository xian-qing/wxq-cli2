import {combineReducers} from 'redux';

import global from './reduxGlobal';
import page1 from './page1';
import page2 from './page2';

export default combineReducers({
   global,page1,page2
});
