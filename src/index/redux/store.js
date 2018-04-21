import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index.js';
import {routerMiddleware} from 'react-router-redux';
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga/sagas'

const logger = createLogger({
    predicate: false,
    collapsed: true,
    diff: true
});
export default function configureStore(history) {
    const reduxRouterMiddleware = routerMiddleware(history);
    const sagaMiddleware = createSagaMiddleware()
    const middleware = [
        reduxRouterMiddleware,
        sagaMiddleware
    ]
    if (false) {
        middleware.push(logger)
    }
    const store = createStore(
        reducers,
        applyMiddleware(...middleware)
    );
    sagaMiddleware.run(mySaga)
    return store;
}
