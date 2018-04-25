import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import {Button,Input} from 'antd';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getData,removeData} from '../../redux/actions/page1'
import {increment_async,lessen} from '../../redux/actions/page2'
//import * as CommonActions from '../../redux/reducers/reduxCommon';
@connect((state) => {
    return ({
        Page2Conut: state.page2.count,
        pageList: state.page1.pageList,
    })
},(dispatch)=>{
    return {
        increment_async:bindActionCreators(increment_async,dispatch),
        lessen:bindActionCreators(lessen,dispatch),
    }
})

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    componentDidMount() {
        const numbers = ['wxq', 'www', 'wxq', 'qwxqw'];
        const doubledOver50 = numbers.reduce((obj, name) => {
            obj[name] = obj[name] ? ++obj[name] : 1;
            return obj;
        }, {});
        console.log(doubledOver50)
    }
    jump(){
        let {history} = this.props
        history.go(-1)
    }
    handleSubmit = () => {
        // console.log("Input Value: ", this.input.value)
        // let me = this
        // setTimeout(()=>{
        //     me.input.value = ''
        //     me.input2.value = ''
        // },100)
    }
    render() {
        let {pageList,increment_async,Page2Conut,lessen} = this.props
        return (
            <div>
                <Button onClick={()=>{increment_async()}}>异步增加</Button>
                <Button onClick={()=>{lessen()}}>减少</Button>
                <Button >{Page2Conut}</Button>

                <Button type="primary" onClick={()=>{this.jump()}}>返回</Button>
                <div>
                    {pageList.map((v,i) => {
                        return <div key={i}>{v.name}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default hot(module)(Page2);