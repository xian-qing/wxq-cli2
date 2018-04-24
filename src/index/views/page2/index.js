import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import {Button,Input} from 'antd';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getData,removeData} from '../../redux/actions/page1'
//import * as CommonActions from '../../redux/reducers/reduxCommon';
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
        let {getData,pageList,removeData} = this.props
        return (
            <div>
                <Input placeholder="Basic usage" />
                {/*<Input*/}
                    {/*type='text'*/}
                    {/*ref={(input) => this.input = input}/>*/}
                {/*<Input*/}
                    {/*type='text'*/}
                    {/*ref={(input2) => this.input2 = input2}/>*/}
                <Button onClick={() => {
                    this.handleSubmit()
                }}>Submit</Button>

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