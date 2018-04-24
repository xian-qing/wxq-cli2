import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import {Button,Input} from 'antd';
import './index.scss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getData,removeData} from '../../redux/actions/page1'

@connect((state) => {
    return ({
        pageData: state.page1.pageData,
        pageList: state.page1.pageList,
    })
},(dispatch)=>{
    return {
        getData:bindActionCreators(getData,dispatch),
        removeData:bindActionCreators(removeData,dispatch),
    }
})

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    componentDidMount() {

    }
    jump(){
        let {history} = this.props
        history.go(-1)
    }
    handleSubmit = () => {

    }
    render() {
        let {getData,pageList,removeData} = this.props
        return (
            <div className="flv">
                <div id='videoElement' onClick={()=>{this.handleSubmit()}}>123123</div>
            </div>
        );
    }
}

export default hot(module)(Page2);