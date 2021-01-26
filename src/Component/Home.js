import React, { Component } from 'react'
import '../Sass/Home.scss'
import Thumbnail from './Thumbnail'
import { connect } from 'react-redux'
import { add_video, } from '../Redux/video/videoAction'
class Home extends Component {
    handleClick = async (name, video) => {
        this.props.add_video(name, video)
    }
    run = () => {
        var canvas = document.getElementById("canV");
        var ctx = canvas.getContext("2d");

        var video = document.getElementById("video");
        var att = document.createAttribute("controls");
        att.value = true
        video.setAttributeNode(att)
        video.src = this.props.video.video;
        // video.src=youtube;
        video.addEventListener('loadeddata', function () {
            video.play();  // start playing
            update(); //Start rendering
        });
        function update() {
            ctx.drawImage(video, 0, 0, 300, 150);
            requestAnimationFrame(update); // wait for the browser to be ready to present another animation fram.       
        }
    }

    render() {
        return (
            <div className='Home'>
                <h2 className='heading'>{this.props.video.name}</h2>
                <canvas id='canV'>
                    <video id='video' controls={true}>

                    </video>
                </canvas>
                <div className='videos'>
                    <Thumbnail key='1' src='http://img.youtube.com/vi/W2PKBAq1Jxo/hqdefault.jpg' name='Recorded Videos on Social Media' click={() => { this.handleClick("Recorded Videos on Social Media", './Video1.mp4').then(this.run)  }} />
                    <Thumbnail key='2' src='http://img.youtube.com/vi/aDOjeAzP3Yc/hqdefault.jpg' name='Zoom with OneStream' click={() => { this.handleClick("Zoom with OneStream", './Video2.mp4').then(this.run) }} />
                    <Thumbnail key='3' src='http://img.youtube.com/vi/AqX-cnQ-Wvw/hqdefault.jpg' name='configure OBS ' click={() => { this.handleClick("configure OBS ", './Video3.mp4').then(this.run) }} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        video: state.video
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add_video: (name, video) => dispatch(add_video(name, video)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);