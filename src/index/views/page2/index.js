import React, {Component} from 'react';
import Utilit from '../../Common/Utility';
import {hot} from 'react-hot-loader'

const comStyles = require('styles/Common.scss');

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render() {
        return (
            <div className={comStyles.navbar}>
                <div className={comStyles.btns}>
                    <button onClick={() => Utility.toPage('page3')}>go to page3</button>
                    <button onClick={() => Utility.$goBack()}>go back</button>
                </div>
                哈哈这
                <div>
                    {
                        this.state.count
                    }
                </div>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1});
                }}> 添加
                </button>
            </div>
        );
    }
}

export default hot(module)(Page2);