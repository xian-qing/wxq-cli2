import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import PropTypes from 'prop-types'
import './index.scss'
import {
    Button,
    Input,
} from 'antd';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getData,removeData,getXintiaoData} from '../../redux/actions/page1'
import {saveUserInfo} from '../../redux/actions/global'
@connect((state) => {
    return ({
        pageData: state.page1.pageData,
        pageList: state.page1.pageList,
        xintiaoData: state.page1.xintiaoData,
        userInfo: state.global.userInfo,

    })
},(dispatch)=>{
    return {
        getData:bindActionCreators(getData,dispatch),
        getXintiaoData:bindActionCreators(getXintiaoData,dispatch),
        removeData:bindActionCreators(removeData,dispatch),
        saveUserInfo:bindActionCreators(saveUserInfo,dispatch),
    }
})
class Page1 extends Component {
    static propTypes = {
        pageData: PropTypes.object,
        pageList: PropTypes.array,
        xintiaoData: PropTypes.object,
        userInfo: PropTypes.object,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        //console.log(this.props);
        //console.log(this.state);
    }
    jump(page){
        console.log(page)
        let {history} = this.props
        history.push(page)
    }
    async getTest(){

    }
    render() {
        let {getData,pageList = [],removeData,userInfo,saveUserInfo,getXintiaoData,xintiaoData} = this.props
        return (
            <div className="page1">
                ddd
                <Button type="primary" onClick={()=>{getData()}} >获取page1数据</Button>
                <Button type="primary" onClick={()=>{this.jump('/page2')}}>跳转到page2</Button>
                <Button type="primary" onClick={()=>{saveUserInfo({uid:12,name:"wxq"})}}>保存用户信息</Button>
                <Button type="primary" onClick={()=>{getXintiaoData()}}>请求</Button>
                <Button type="primary" onClick={()=>{this.jump('/login')}}>登录页面</Button>
                <div>
                    {pageList.map((v,i) => {
                        return <div key={i}>{v.name}<Button type="danger" size={'small'} onClick={()=>{removeData(v)}}>删除</Button></div>
                    })}
                </div>
                <div>{userInfo}</div>
                <div>{JSON.stringify(xintiaoData)}</div>

            </div>

        );
    }
}


export default hot(module)(Page1);
