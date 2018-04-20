import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import BuildStore from './redux/store';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const ApiClientStore = BuildStore(history);

import getRouter from './router/router';
import {Router} from 'react-router';

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <Provider store={ApiClientStore} key="provider">
            <Router history={history}>
                {RootElement}
            </Router>
        </Provider>,
        document.getElementById('app')
    );
}

/**
 * 初始化
 */
renderWithHotReload(getRouter());

/**
 * 热更新
 */
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const hotRouter = require('./router/router').default;
        renderWithHotReload(hotRouter());
    });
}
