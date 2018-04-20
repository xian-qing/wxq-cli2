import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import {asyncComponent} from './asyncCompont';

const home = asyncComponent(() => import(/* webpackChunkName: "js/home" */ "../views/home/index.js"));
//import home from '../views/home/index'
const page1 = asyncComponent(() => import(/* webpackChunkName: "js/page2" */ "../views/page1/index.js"));
const page2 = asyncComponent(() => import(/* webpackChunkName: "js/page2" */ "../views/page2/index.js"));

//404情况
const NoMatch = ({location}) => (
    <div>
        <h3>未找到<code>{location.pathname}</code>页面哦</h3>
    </div>
)

const getRouters = () => (
    <Router basename={'index.html'}>
        <Switch>
            <Route exact path="/" component={page1}/>
            <Route path="/page2" component={page2}/>
            <Route component={NoMatch}/>
        </Switch>
    </Router>
);


export default getRouters;
