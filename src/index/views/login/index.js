import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import PropTypes from 'prop-types'
import './index.scss'
import {Form, Input, Tabs, Button, Icon, message,Col,Row} from 'antd'

const TabPane = Tabs.TabPane
const FormItem = Form.Item

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getData,removeData} from '../../redux/actions/page1'
import {saveUserInfo} from '../../redux/actions/global'
@connect((state) => {
    return ({
        pageData: state.page1.pageData,
        pageList: state.page1.pageList,
        userInfo: state.global.userInfo,
    })
},(dispatch)=>{
    return {
        getData:bindActionCreators(getData,dispatch),
        removeData:bindActionCreators(removeData,dispatch),
        saveUserInfo:bindActionCreators(saveUserInfo,dispatch),
    }
})
class Page1 extends Component {
    static propTypes = {
        pageData: PropTypes.object,
        pageList: PropTypes.array,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props);
        console.log(this.state);
    }
    jump(){
        let {history} = this.props
        history.push('/page2')
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            console.log(values)
            let {history} = this.props
            history.push('/')
        })
    }
    render() {
        let {getData,pageList = [],removeData,userInfo,saveUserInfo} = this.props
        const {getFieldDecorator} = this.props.form
        return (
            <div id="Login">
                <Row className="loginBox">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Col>
                            <FormItem className='input'>
                                {getFieldDecorator('name', {
                                    rules: [{required: true, message: '请输入用户名!'}],
                                })(
                                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder="用户名"/>,
                                )}
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码!'}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                           placeholder="密码"/>,
                                )}
                            </FormItem>
                        </Col>

                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登 录
                            </Button>
                        </FormItem>
                    </Form>
                </Row>
            </div>

        );
    }
}


export default hot(module)(Form.create()(Page1));
