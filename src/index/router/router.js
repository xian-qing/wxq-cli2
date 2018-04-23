import React from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import {asyncComponent} from './asyncCompont';
const login = asyncComponent(() => import(/* webpackChunkName: "login" */ "../views/login/index.js"));
const page1 = asyncComponent(() => import(/* webpackChunkName: "page1" */ "../views/page1/index.js"));
const page2 = asyncComponent(() => import(/* webpackChunkName: "page2" */ "../views/page2/index.js"));

//404情况
const NoMatch = ({location}) => (
    <div>
        <div style={{'color':'#000'}}>404未找到<code>{location.pathname}</code>页面</div>
    </div>
)

const getRouters = () => (
    <Router basename={'/index/'}>
        <Switch>
            <Route exact path="/" component={page1}/>
            <Route path="/page2" component={page2}/>
            <Route path="/login" component={login}/>
            <Route path='/404' component={NoMatch} />
            <Redirect from='*' to='/404' />
        </Switch>
    </Router>
);

export default getRouters;

