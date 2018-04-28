import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import {Button,Input} from 'antd';
import './index.scss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getData,removeData} from '../../redux/actions/page1'
import flvjs from 'flv.js'

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
        this.state = {
            count: 0,
            flvPlayer:{}
        };
    }
    componentDidMount() {
        if (flvjs.isSupported()) {
            let videoElement = document.getElementById('videoElement');
            this.state.flvPlayer = flvjs.createPlayer({
                type: 'flv',
                isLive: true,
                hasAudio: true,
                hasVideo: true,
                cors:true,
                enableStashBuffer: true,
                conrtols:true,
                url: 'https://cn-fjxm-dx-live-01.live-play.acgvideo.com/live-bvc/392903/live_464276_332_c521e483.flv?expires=1524885963&ssig=ulfMFkWmBdC3-icSYr6izA&oi=463240496',
            },{
                enableWorker: false,
                lazyLoadMaxDuration: 3 * 60,
                seekType: 'range',
            });

            this.state.flvPlayer.attachMediaElement(videoElement);
            this.state.flvPlayer.load();

        }
    }
    jump(){
        let {history} = this.props
        history.go(-1)
    }
    handleSubmit = () => {

    }
    flv_start = () => {
        this.state.flvPlayer.play();
    }
    flv_pause = () => {
        this.state.flvPlayer.pause();
    }

    render() {
        return (
            <div className="flv">
                <video id="videoElement">
                    Your browser is too old which doesn't support HTML5 video.
                </video>
                <div className="controls">
                    <div onClick={()=>{this.flv_start()}}>Start</div>
                    <div onClick={()=>{this.flv_pause()}}>Pause</div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Page2);