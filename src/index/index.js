import React, {Component} from 'react';
import ReactDOM ,{unmountComponentAtNode}from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import APP from './views/app';

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            <RootElement/>
        </AppContainer>,
        document.getElementById('app')
    );
}

/**
 * 初始化
 */
renderWithHotReload(APP);

/**
 * 热更新
 */
if (module.hot) {
    module.hot.accept('./views/app', () => {
        console.log(123)
        console.clear()
        let APP = require('./views/app').default;
        const root = document.getElementById('app')
        unmountComponentAtNode(root)
        renderWithHotReload(APP);
    });
}
