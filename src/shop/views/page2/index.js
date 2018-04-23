import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import {Button} from 'antd';

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
    jump(){
        let {history} = this.props
        history.go(-1)
    }
    render() {
        let {getData,pageList,removeData} = this.props
        return (
            <div>
                {/*<Button type="primary" >获取page2数据</Button>*/}
                {/*<Button type="danger">删除</Button>*/}
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