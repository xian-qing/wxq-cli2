import React from 'react'
import {hot} from "react-hot-loader";
import {Component} from "react";
import '../styles/index.scss';
import getRouter from '../router/router';
import {Provider} from 'react-redux';
import BuildStore from '../redux/store';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const ApiClientStore = BuildStore(history);
import {Router} from 'react-router';


export class App extends React.Component {
    render() {
        return(
            <Provider store={ApiClientStore} key="provider">
                <Router history={history}>
                    {getRouter()}
                </Router>
            </Provider>
        )
    }
}

export default App;